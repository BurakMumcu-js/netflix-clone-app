import React, {useState} from "react";
import Input from "@/components/input";
import {FaGithub,FaGoogle} from "react-icons/fa";
function auth() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
            <div className='bg-black h-full w-full bg-opacity-45'>
                <nav className='px-12 py-6'>
                    <img src='/images/logo.png' className='h-12'/>
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-85 px-20 py-20 self-center mt-2 lg:w-2/5 rounded-xl w-full'>
                    <h2 className='text-white text-5xl mb-8 font-semibold'>Register</h2>
                        <div className='flex flex-col gap-4'>
                            <Input id='name' type='text' onChange={(e:any)=>setName(e.target.value)} value={name} label='Username'/>
                            <Input id='email' type='email' onChange={(e:any)=>setEmail(e.target.value)} value={email} label='Email Address'/>
                            <Input id='password' type='password' onChange={(e:any)=>setPassword(e.target.value)} value={password} label='Password'/>
                        </div>
                        <button className='bg-red-700 py-3 text-white rounded-md w-full mt-10
                        hover:bg-red-800 transition'>Sign Up</button>
                        <div className='flex flex-row items-center gap-4 mt-10 justify-center'>
                            <div className='bg-white flex text-red-700 w-12 h-12 rounded-full items-center text-center cursor-pointer justify-center'>
                                <FaGoogle size={30}/>
                            </div>
                            <div className='bg-white flex text-black w-12 h-12 rounded-full items-center text-center cursor-pointer justify-center'>
                                <FaGithub size={30}/>
                            </div>
                        </div>
                        <p className='text-neutral-600 mt-12'>
                            Already have an account
                            <span className='text-white ml-2 cursor-pointer hover:underline transition'>Create an account</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default auth;