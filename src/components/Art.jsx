import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Art = () => {
  const maskRef = useRef();
  const insiderRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: "top 10%",
        end: "bottom 90%",
        scrub: 1.5,
        pin: true,
        // markers: true,
      },
    });

    tl.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    })
      .to(".masked-img", {
        scale: 1.5,
        duration: 1.2,
        ease: "power2.out",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(insiderRef.current, {
        scale: 1.4,
        ease: "circ.out",
      });

    gsap.to(maskRef.current, {
      maskSize: "400%",
      duration: 1,
      scrollTrigger: {
        trigger: maskRef.current,
        start: "bottom 80%",
        end: "bottom 60%",
        scrub: 0.04,
        // markers: true,
      },
    });

    if (window.innerWidth < 768) {
      const mobileTL = gsap.timeline({
        scrollTrigger: {
          trigger: "#art",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          // markers: true,
        },
      });

      mobileTL
        .to(maskRef.current, {
          scale: 1.1,
          duration: 1,
          ease: "power1.inOut",
        })
        .to(insiderRef.current, {
          scale: 1.2,
          duration: 1,
          ease: "circ.out",
        });
    }
  }, []);

  return (
    <div
      id="art"
      className="font-face flex-center flex-col relative radial-gradient p-5 overflow-hidden"
    >
      <div className="h-full">
        {/* Title */}
        <h2 className="will-fade text-8xl md:text-[20vw] leading-none text-center font-modern-negra text-[#505050] mb-8">
          The ART
        </h2>

        {/* Content */}
        <div className="relative content flex md:flex-row flex-col justify-between md:mt-0 gap-10">
          {/* Left list */}
          <ul className="space-y-4 will-fade">
            {goodLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{item}</p>
              </li>
            ))}
          </ul>

          {/* Masked image container */}
          <div
            ref={maskRef}
            style={{
              maskImage: "url('/images/maskGlass-img.png')",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "100%",
              transform: "translate(0%, -40%)",
            }}
            className="md:w-[400px] md:h-[300px] h-[300px] relative masked-img overflow-hidden rounded-4xl border-2 z-0"
          >
            <img
              ref={insiderRef}
              src="/images/underGlass-img.jpg"
              alt="masked content"
              className="w-full h-full object-cover rounded-4xl absolute top-0"
            />
          </div>

          {/* Right list */}
          <ul className="space-y-4 will-fade opacity-100 md:opacity-100">
            {featureLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Final content reveal */}
        <div className="masked-container text-center -mt-5">
          <div id="masked-content" className="opacity-0 md:px-0 space-y-5">
            <h3 className="text-2xl md:text-5xl font-serif text-white">
              Made with Craft, Poured with Passion
            </h3>
            <p className="text-lg">
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
