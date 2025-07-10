import React, { useRef } from 'react';
import { cocktailLists, mockTailLists } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cocktails = () => {

    const leftLeafReff = useRef(null);
    const rightLeafReff = useRef(null);

    useGSAP(()=>{
        gsap.to(leftLeafReff.current,{
            y: -80,
            x:100,
            duration: 1.5,
            scrollTrigger:{
                trigger:leftLeafReff.current,
                start:'top 80%',
                end:'top 30%',
                scrub:true,
                // markers:true
            }
        })

        gsap.to(rightLeafReff.current,{
            y: -100,
            duration:1,
            scrollTrigger:{
                trigger:rightLeafReff.current,
                start:'top 60%',
                end:'top 30%',
                scrub:1.3,
                // markers:true
            }
        })
    },[])

  return (
    <div id='cocktails' className="font-face relative min-h-screen flex items-center justify-center pt-40  text-white">
      <section className="absolute left-30 max-w-4xl">
        <p className="text-xl font-semibold mb-6">Most Popular Cocktails:</p>
        <ul className="space-y-6">
          {cocktailLists.map((element, index) => (
            <li key={index} className="flex justify-between  pb-4">
              <div>
                <p className="text-lg font-bold text-amber-200">{element.name}</p>
                <p className="text-sm text-white/70">{element.country}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">{element.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="absolute right-30 max-w-4xl ">
        <p className="text-xl font-semibold mb-6">Most Loved Cocktails:</p>
        <ul className="space-y-6">
          {mockTailLists.map((element, index) => (
            <li key={index} className="flex justify-between border-b border-white/20 pb-4">
              <div>
                <p className="text-lg font-bold text-amber-200">{element.name}</p>
                <p className="text-sm text-white/70">{element.country}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">{element.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>


{/* leaves */}
          <img ref={leftLeafReff} className='absolute -bottom-45 -left-30 -z-10' src="/images/hero-left-leaf.png" alt="" />
          <img ref={rightLeafReff} className='absolute bottom-0 right-0 -z-100' src="/images/hero-right-leaf.png" alt="" />

      <img
      className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
      src="/images/noise.png"
      alt="noise background"
    />
    </div>
  );
};

export default Cocktails;
