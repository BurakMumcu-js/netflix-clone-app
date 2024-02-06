import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb'

export default async function handler (req:NextApiRequest,res:NextApiResponse){
    try {
        if(req.method !== 'GET'){
            return res.status(405).end()
        }

    } catch (error) {
        return res.status(500).json({message:error})
    }
}