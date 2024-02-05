import React, { useCallback, useState } from 'react'
import { BellIcon ,ChevronDownIcon,MagnifyingGlassIcon} from "@heroicons/react/24/solid"
import NavItem from './NavItem'
import MobileMenu from './MobileMenu';

function Navbar() {

const [mobileMenu,setMobileMenu] = useState(false);

const toggleMobileMenu = useCallback(()=>{
    setMobileMenu((current) => !current);
},[])

  return (
    <nav className='w-full fixed z-20'>
        <div className="flex items-center justify-between flex-row transition px-4 py-6">
            <img className='lg:h-10 h-6' src='/images/logo.png'/>
        <div className='flex-row lg:flex hidden gap-7 ml-12'>
            <NavItem name='Home' active></NavItem>
            <NavItem name='Movies'></NavItem>
            <NavItem name='Series'></NavItem>
            <NavItem name='New & Popular'></NavItem>
            <NavItem name='My List'></NavItem>
            <NavItem name='Browse My Languages'></NavItem>
        </div>
        <div onClick={toggleMobileMenu} className='relative lg-hidden flex flex-row items-center gap-2 ml-6'>
        <p className='text-white'>Browse</p>
        <ChevronDownIcon className='w-5 text-white'></ChevronDownIcon>
        <MobileMenu visible={mobileMenu}></MobileMenu>
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
            <div className='cursor-pointer'>
            <MagnifyingGlassIcon className='w-5 text-white'></MagnifyingGlassIcon>
            </div>
            <div className='cursor-pointer'>
            <BellIcon className='w-5 text-white'></BellIcon>
            </div>
            <div className='flex flex-row ml-auto gap-7 items-center'>
<div className='w-6 h-6 lg:w-8 lg:h-8 transition rounded-lg overflow-hidden'>
    <img src='/images/default-red.png'></img>
</div>
<ChevronDownIcon className='w-5 text-white'></ChevronDownIcon>
</div>
        </div>

        </div>
    </nav>
  )
}

export default Navbar