

import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useRef } from 'react'

const Navbar = () => {


      const navRef = useRef();
      
      useGSAP(()=>{
        gsap.to(navRef.current,{
          backdropFilter: "blur(5px)",
          duration: 1,
          scrollTrigger:{
            trigger:navRef.current,
            start:'top top',
            end:'bottom top',
            scrub:true,
          }
        })
      })

  return (
    <div  ref={navRef} className='yz-font flex justify-between items-center p-5 fixed top-0 w-full z-20 '>
      <div className='flex items-center justify-center gap-2'>
      <img src='/images/logo.png' alt="logo" />
    <p>Velvet Pour</p>
      </div>
      <div className='flex items-center justify-center gap-10'>
      <a href="#cocktails">Cocktails</a>
      <a href="#about">About Us</a>
      <a href="#art">The Art</a>
      <a href="#contact">Contact</a>
      </div>

    </div>
  )
}

export default Navbar