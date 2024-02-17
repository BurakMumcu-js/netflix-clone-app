import {create} from 'zustand';

export interface ModalStoreInterface {
    movieId?:string,
    isOpen:boolean,
    openModal:(movieId:string) => void
    closeModal:()=>void
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
    movieId:undefined,
    isOpen: false,
    openModal: (id) => set({isOpen: true, movieId: id}),
    closeModal: () => set({isOpen: false,movieId:undefined})
}))

export default useInfoModalStore