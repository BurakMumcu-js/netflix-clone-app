import { AuthOptions, Awaitable, RequestInternal, User } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from '@/lib/prismadb'
import {compare} from 'bcrypt';
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions : AuthOptions = {
    providers: [
        Credentials({
            id: 'credentials',
            name: "Credentials",
            credentials: {
                email: {
                    label:'Email',
                    type:'text',
                },
                password:{
                    label:"Password",
                    type:'password'
                },             
            },
            async authorize(credentials) {
             if (!credentials?.email || !credentials.password) {
                throw new Error('email or password required')
             }   
             const user = await prismadb.user.findUnique({
                where : {
                    email:credentials.email,
                }
             })

             if(!user || !user.hashedPassword){
                throw new Error('email does not exist')
             }

             const isCorrect = await compare(credentials.password,user.hashedPassword)
             if(!isCorrect){
                throw new Error('Incorrect Password');
             }
             return user;
            }
        })
    ],
    pages:{
        signIn:"/auth",
    },
    debug:process.env.NODE_ENV === 'development',
    adapter:PrismaAdapter(prismadb),
    session:{strategy:'jwt'},
    jwt:{
        secret:process.env.NEXTAUTH_JWT_SECRET,
    },
    secret:process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);