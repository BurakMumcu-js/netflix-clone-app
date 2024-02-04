import React from "react";

interface InputProps {
    id:string;
    onChange:any;
    value:string;
    label:string;
    type?:string
}

const Input:React.FC<InputProps> =({type,id,label,value,onChange})=>{
    return(
        <div className='relative'>
        <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className='block rounded-xl px-7 pt-5 pb-1 w-full text-base
        text-white bg-neutral-600 focus:outline-none focus:right-0 peer'
        />
            <label htmlFor={id} className='absolute text-base scale-75 -translate-y-1 z-10 origin-[0]
            text-zinc-400 top-3 left-7 peer-placeholder-shown:scale-100 duration-150 transform
             peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2'>{label}</label>
        </div>
    )
}

export default Input;