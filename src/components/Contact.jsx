import React, { useRef } from 'react'
import { openingHours, socials, storeInfo } from '../constants/index'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Contact = () => {

  const righfooterLeaf = useRef();
  const leftfooterLeaf = useRef();

  useGSAP(()=>{
    const footerTL = gsap.timeline();

    footerTL.to(righfooterLeaf.current,{
      x:-100,
      duration:2,
      scrollTrigger:{
        trigger:righfooterLeaf.current,
        top:'top top',
        end:'top 20%',
        scrub:0.1
      }
    })

    footerTL.to(leftfooterLeaf.current,{
      x:100,
      duration:2,
      scrollTrigger:{
        trigger:leftfooterLeaf.current,
        top:'top 50%',
        end:'top 20%',
        scrub:0.1
      }
    })
  })

  return (
    <div id='contact' className='yz-font relative px-10 py-20 flex flex-col items-center justify-center gap-10'>

{/* leaves */}
      <div >
        <img ref={leftfooterLeaf}  className='absolute bottom-0 left-[-100px]' src="/images/footer-left-leaf.png" alt="" />
        <img ref={righfooterLeaf}  className='absolute top-0 right-[-100px]' src="/images/footer-right-leaf.png" alt="" />
      </div>


       <div
          className="h-[1px] rounded-full absolute top-100 -z-10"
          style={{ boxShadow: "rgb(122 122 122) 1px 1px 613px 117px" }}
        ></div>

      <div>
        <h1 className='text-6xl font-bold'>{storeInfo.heading}</h1>
      </div>

      <div className='flex items-center justify-center flex-col'>
        <p className='text-2xl uppercase'>Visit Our Bar</p>
        <p className='text-3xl'>{storeInfo.address}</p>
      </div>


{/* contact */}
      <div className='flex flex-col items-center justify-center gap-1'>
        <p className='text-2xl uppercase'>Contact Us</p>
        <p className='text-3xl'> {storeInfo.contact.phone}</p>
       <p className='text-3xl'> {storeInfo.contact.email}</p>
      </div>


{/* openings */}
      <div className='flex flex-col items-center justify-center gap-1'>
      <p className='text-2xl uppercase'>Open Every Day</p>
      <div className='flex flex-col items-center justify-center gap-1'>
      {openingHours.map((element, index)=>(
        <ul key={index+1}>
            <li className='text-3xl'>{element.day}:{element.time}</li>
        </ul>
      ))}
        </div>
    </div>


    {/* social media */}
    <div className='flex items-center justify-center flex-col gap-2'>
      <p>SOCIALS</p>
      <ul className='flex items-center justify-center gap-5'>
        
      {socials.map((social,index)=>(
        <li className='flex '>
            <a key={index+3} href={social.url}> 
            <img src= {social.icon} alt="" />
            </a>
        </li>

      ))}
      </ul>

    </div>


    </div>


  )
}

export default Contact