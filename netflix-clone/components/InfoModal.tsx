import useInfoModalStore from '@/hooks/useInfoModalStore';
import useMovie from '@/hooks/useMovie';
import React, { useCallback, useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid';
import PlayButton from './PlayButton';
import FavoriButton from './FavoriButton';

interface InfoModalProps {
    visible?: boolean,
    onClose:any,
}

const InfoModal:React.FC<InfoModalProps> = ({visible,onClose}) => {

    const [isVisible,setIsVisible] = useState<boolean>(!!visible);
    const {movieId} = useInfoModalStore();
   
    const {data={}} = useMovie(movieId);
    useEffect(()=>{
        setIsVisible(!!visible);
        },[visible])

        const handleClose = useCallback(()=>{
            setIsVisible(false);
            setTimeout(()=>{
                onClose();
            },300)
        },[onClose])

        

        if(!visible) return null;
    return (
    <div className='z-50 transition duration-300 bg-black bg-opacity-80 flex
    justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0'>
        <div className='relative w-auto mx-auto max-w-3xl rounded-xl overflow-hidden'>
        <div className={`${isVisible ? 'scale-100' : 'scale-0'} relative flex-auto bg-zinc-800`}>
            <div className='relative h-96'>
            <video className='w-full brightness-50 object-hover h-full' 
            poster={data.thumbnailUrl} controls autoPlay muted src={data.videoUrl}></video>
            <div onClick={handleClose} className='cursor-pointer absolute top-3 right-3 bg-black rounded-full p-2'>
                <XMarkIcon className='text-white w-6'></XMarkIcon>
            </div>
            <div className='absolute top-4'>
            <p className='text-white text-xl md:text-2xl lg:text-3xl'>
            {data?.title}
            </p>
            <div className='flex flex-row gap-4 items-center mt-5'>
                <PlayButton movieId={data.id}> </PlayButton>
                <FavoriButton movieId={data.id}> </FavoriButton>
            </div>
            </div>
            
            </div>
            <div className='px-12 py-10'>
                <div className='flex flex-row items-center gap-2 mb-2'>
                <p className='text-green-400 font-bold text-lg'>New</p> 
                </div>
                <div className='text-white text-lg font-bold mb-4'>
                {data?.duration}
                </div>
                <div className='text-white text-lg font-bold mb-8'>
                {data?.genre}
                </div>
                <div className='text-white text-lg font-bold mb-4'>
                {data?.description}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default InfoModal