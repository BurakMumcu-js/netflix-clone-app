import React, { useCallback } from 'react'
import { MovieInterface } from './MovieList'
import { PlayIcon,ChevronDownIcon } from '@heroicons/react/24/solid'
import FavoriButton from './FavoriButton'
import { useRouter } from 'next/router'
import useInfoModalStore from '@/hooks/useInfoModalStore'

interface MovieCardProp {
    data: MovieInterface
}

const MovieCard: React.FC<MovieCardProp> = ({data}) => {

  const router = useRouter();
  const {openModal} = useInfoModalStore();
  const redirectToWatch = useCallback(()=>{
    router.push(`/watch/${data.id}`)
},[router,data.id])

  return (
    <div className='group bg-zinc-800 col-span-1 relative h-52'>
        <img onClick={redirectToWatch} src={data.thumbnailUrl} className='h-52 w-full object-cover cursor-pointer
         shadow-xl rounded-lg group-hover:opacity-70'>

        </img>
        <div className='opacity-0 z-10 group-hover:opacity-100
         group-hover:scale-110 transition absolute top-0 scale-0 invisible sm:visible'>
        <img onClick={redirectToWatch} src={data.thumbnailUrl} className='h-36 w-full object-cover cursor-pointer
         shadow-xl rounded group-hover:opacity-85'/>
        <div className='z-20 bg-zinc-800 p-2 lg:p-4 absolute w-full shadow-lg rounded-b-md'>
            <div className='flex flex-row items-center gap-4'>
            <div className='bg-white flex transition hover:border-neutral-300 border-2 border-white
             items-center cursor-pointer justify-center rounded-full w-6 lg:w-8 h-6 lg:h-8'>
            <PlayIcon onClick={redirectToWatch} className='text-black w-4 lg:w-6 cursor-pointer'></PlayIcon>
            </div>
            <div>
           <FavoriButton movieId={data.id}></FavoriButton>
            </div>
            <div onClick={()=>openModal(data.id)} className='ml-auto bg-white flex transition hover:border-neutral-300 border-2 border-white
             items-center cursor-pointer w-6 lg:w-8 h-6 lg:h-8'>
            <ChevronDownIcon className='text-black w-4 lg:w-6 cursor-pointer'></ChevronDownIcon>
            </div>
            </div>
            <p className='text-green-500 font-semibold mt-4 text-sm'>New <span className='ml-2 text-white'>
              2024</span></p>
              <div className='flex flex-row mt-4 gap-2 items-center'>
                <p className='text-white text-sm'> {data.duration}</p>
              </div>
              <div className='flex flex-row mt-4 gap-2 items-center'>
                <p className='text-white text-sm'> {data.genre}</p>
              </div>
        </div>
        </div>
    </div>
  )
}

export default MovieCard