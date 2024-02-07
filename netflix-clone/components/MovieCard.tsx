import React from 'react'
import { MovieInterface } from './MovieList'
import { PlayIcon } from '@heroicons/react/24/solid'

interface MovieCardProp {
    data: MovieInterface
}

const MovieCard: React.FC<MovieCardProp> = ({data}) => {
  return (
    <div className='group bg-zinc-800 col-span-1 relative h-52'>
        <img src={data.thumbnailUrl} className='h-52 w-full object-cover cursor-pointer
         shadow-xl rounded-lg group-hover:opacity-70'>

        </img>
        <div className='opacity-0 z-10 group-hover:opacity-100
         group-hover:scale-110 transition absolute top-0 scale-0 invisible sm:visible'>
        <img src={data.thumbnailUrl} className='h-36 w-full object-cover cursor-pointer
         shadow-xl rounded group-hover:opacity-85'/>
        <div className='z-20 bg-zinc-800 p-2 lg:p-4 absolute w-full shadow-lg rounded-b-md'>
            <div className='flex flex-row items-center gap-4'>
            <div className='bg-white flex items-center justify-center rounded-full w-6 lg:w-8 h-7'>
            <PlayIcon className='text-black w-4 lg:w-6 cursor-pointer'></PlayIcon>
            </div>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default MovieCard