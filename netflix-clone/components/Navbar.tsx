import React, { useCallback, useEffect, useState } from 'react'
import { BellIcon ,ChevronDownIcon,MagnifyingGlassIcon} from "@heroicons/react/24/solid"
import NavItem from './NavItem'
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

function Navbar() {

const [mobileMenu,setMobileMenu] = useState(false);
const [accountMenu,setAccountMenu] = useState(false);

const [showBack,setShowBack] = useState(false);
const topofset = 55

useEffect(()=>{
 const handleScrool = ()=> {
    if(window.scrollY >= topofset){
            setShowBack(true);
    }
    else{
        setShowBack(false)
    }
 }   
 window.addEventListener('scroll',handleScrool);
 return()=>{
    window.removeEventListener('scroll',handleScrool)
 }
},[])
// const handleClick = () => setShow(!show)

const toggleMobileMenu = useCallback(()=>{
    setMobileMenu((current) => !current);
},[])

const toggleAccountMenu = useCallback(()=>{
    setAccountMenu((current) => !current);
},[])

  return (
    <nav className='w-full fixed z-20'>
        <div className={ `flex flex-row transition px-4 py-6 ${showBack ? 'bg-zinc-950 bg-opacity-95' : ''}`}>
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
            <div onClick={toggleAccountMenu} className='cursor-pointer flex flex-row ml-auto gap-2 relative items-center'>
<div  className='w-6 h-6 lg:w-8 lg:h-8 transition rounded-lg overflow-hidden'>
    <img src='/images/default-red.png'></img>
</div>
<ChevronDownIcon className='w-5 text-white'></ChevronDownIcon>
<AccountMenu visible={accountMenu}></AccountMenu>
</div>
        </div>

        </div>
    </nav>
  )
}

export default Navbar