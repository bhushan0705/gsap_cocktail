import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {


  const detailRef = useRef();

  useGSAP(()=>{
    gsap.from(detailRef.current,{
      opacity:0,
      y:50,
      duration:1,
      ease:"power2.out",
      scrollTrigger:{
        trigger:detailRef.current,
        start:"top 90%",
        end:"top 90%",
        scrub:1,
        // markers:true
      }
    })
  })


  return (
    <div id="about" className="md:archivo-font w-full flex flex-col items-center justify-center py-30 px-4 bg-black text-white">
      {/* Content Container */}
      <div className="max-w-[1280px] w-full flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          
        
          <div className="flex items-start justify-center flex-col max-w-[500px] gap-4">
          <button className="font-medium border-2 px-5 py-2 rounded-full bg-white text-black">Best Cocktails</button>
          <p ref={detailRef} className="md:text-5xl text-3xl text-gray-300">Where every detail matters -from muddle to garnish</p>
          </div>

          {/* Right: Description */}
          <div className="max-w-[500px]">
            <p className="text-3xl mb-2">
              Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
            </p>
            <div>
            <p className="text-2xl font-medium"><span className="text-5xl font-bold text-yellow-400">4.5</span>/5 </p>
            <p>More than +12,000 customers</p>
            </div>
          </div>
        </div>

        {/* Images Section */}
<div className="md:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 bg-black flex flex-col items-center flex-wrap">
  <div className="relative h-72 rounded-xl overflow-hidden">
    <img src="/images/abt1.png" className="w-full h-full object-cover" alt="img1" />
    <img
      src="/images/noise.png"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-400 z-1"
      alt="noise"
    />
  </div>

  <div className="relative h-72 rounded-xl overflow-hidden">
    <img src="/images/abt2.png" className="w-full h-full object-cover" alt="img2" />
    <img
      src="/images/noise.png"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none  opacity-400 z-1"
      alt="noise"
    />
  </div>

  <div className="relative h-72 rounded-xl overflow-hidden">
    <img src="/images/abt5.png" className="w-full h-full object-cover" alt="img3" />
    <img
      src="/images/noise.png"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none  opacity-400 z-1"
      alt="noise"
    />
  </div>

  <div className="col-span-full md:grid grid-cols-12 gap-5 flex flex-col items-center justify-center">
    <div className="relative col-span-8 h-72 rounded-xl overflow-hidden">
      <img src="/images/abt3.png" className="w-full h-full object-cover" alt="img4" />
      <img
        src="/images/noise.png"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none  opacity-400 z-1"
        alt="noise"
      />
    </div>

    <div className="relative col-span-4 h-72 rounded-xl overflow-hidden">
      <img src="/images/abt4.png" className="w-full h-full object-cover" alt="img5" />
      <img
        src="/images/noise.png"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none  opacity-400 z-1"
        alt="noise"
      />
    </div>

  </div>
</div>




      </div>
    </div>
  );
};

export default About;
