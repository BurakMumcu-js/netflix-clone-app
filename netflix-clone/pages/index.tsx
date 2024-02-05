import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context:NextPageContext) {
  const session = await getSession(context);

  if(!session){
      return {
          redirect:{
              destination:"/auth",
              permanent:false
          }
      }
  }

  return{
      props: {}
  }
}

export default function Home() {
  const {data:user} = useCurrentUser();
  return (
  <>
  <h1 className='text-3xl font-bold underline'>
   {user?.email}
  </h1>
  <button onClick={()=>signOut()} className='w-full bg-black text-white text-xl'>
      logout
  </button>
  </>
  );
}
