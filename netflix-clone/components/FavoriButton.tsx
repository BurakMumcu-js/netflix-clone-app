import useCurrentUser from '@/hooks/useCurrentUser';
import useFavoriMovie from '@/hooks/useFavorites'
import React, { useCallback, useMemo, useState } from 'react'
import { PlusIcon,CheckIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

interface FavoriButtonProps {
    movieId?: string,
    children?: React.ReactNode
}

const FavoriButton: React.FC<FavoriButtonProps> = ({movieId}) => {
    const {data:MuteFavori} = useFavoriMovie();
    const {data:user} = useCurrentUser();

    const [isFavori,setIsFavori] = useState<boolean>(false);

    useMemo(()=>{
        const list = user?.favoriteIds || [];
        setIsFavori(list.includes(movieId));
    },[user,movieId]);

    const toggleFavorites = useCallback(async () => {
        try {
            if(isFavori){
                await axios.delete('/api/favorite',{data:{movieId}});
            }
            else {
                await axios.post('/api/favorite',{movieId});
            }

            setIsFavori(!isFavori);
            MuteFavori();
        } catch (error) {
         console.log(error);   
        }
    },[movieId,isFavori,MuteFavori])

    const Icon = isFavori ? CheckIcon : PlusIcon

  return (
    <div onClick={toggleFavorites} className='cursor-pointer border-2 border-white rounded-full flex 
    items-center justify-center w-7 h-7 lg:w-11 lg:h-11 hover:border-neutral-400'>
        <Icon className='text-white w-4 h-4 lg:w-7 lg:h-7'></Icon>
    </div>
  )
}

export default FavoriButton