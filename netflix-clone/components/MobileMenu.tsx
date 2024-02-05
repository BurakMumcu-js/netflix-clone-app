import React from 'react'
interface mobileProp{
    visible?:boolean,

}

const MobileMenu: React.FC<mobileProp> = ({visible}) => {
  if(!visible){
    return null;
  } 
    return (
    <div className='bg-gray-950 w-48 absolute rounded-lg border-2 top-8 left-0 py-5 flex-col border-gray-800 flex'>
        <div className='flex flex-col gap-4'>
            <div className='px-3 text-center text-white hover:underline'>Home</div>
            <div className='px-3 text-center text-white hover:underline'>Movies</div>
            <div className='px-3 text-center text-white hover:underline'>New & Popular</div>
            <div className='px-3 text-center text-white hover:underline'>My List</div>
            <div className='px-3 text-center text-white hover:underline'>Browse By Languages</div>
        </div>
    </div>
  )
}

export default MobileMenu