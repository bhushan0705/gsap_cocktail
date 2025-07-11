import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const leftLeafRef = useRef();
  const rightLeafRef = useRef();
  const textRef = useRef();
  const lineRef = useRef();
  const descRef = useRef();
  const videoRef = useRef();

  useGSAP(() => {
    // Split text
    const split = new SplitType(textRef.current, { types: "chars, words" });
    const lineSplit = new SplitType(lineRef.current, { types: "lines" });
    const descSplit = new SplitType(descRef.current, { types: "lines" });

    split.chars.forEach((char) => {
      gsap.set(char, {
        backgroundImage: "linear-gradient(to top,#899990, #ffffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      });
    });

    gsap.from(split.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power2.out",
    });

    gsap.from(lineSplit.lines, {
      duration: 0.8,
      y: 10,
      autoAlpha: 0,
      stagger: 0.05,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from(descSplit.lines, {
      duration: 0.8,
      y: 50,
      autoAlpha: 0,
      stagger: 0.05,
      delay: 1,
      ease: "power2.out",
    });

    // Scroll-triggered leaves
    gsap.to(leftLeafRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: leftLeafRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(rightLeafRef.current, {
      y: 40,
      scrollTrigger: {
        trigger: leftLeafRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Wait for video metadata
    videoRef.current.onloadedmetadata = () => {
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
        currentTime: videoRef.current.duration || 2,
        ease: "none",
      });
    };

    // Pin the video wrapper during hero section scroll
    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      pin: "#video-wrapper",
      scrub: true,
      // markers: true,
    });
  }, []);

  return (
    <>
      {/* Pinned Video Section */}
      <video
        ref={videoRef}
        id="video-wrapper"
        muted
        playsInline
        preload="auto"
        className=" absolute w-full h-[80%] bottom-0 -z-10 "
        src="/videos/output.mp4"
      />
      {/* Hero Content */}
      <div id="hero" className="font-face h-[100vh]  overflow-hidden relative">
        {/* Main Heading */}
        <div className="flex items-center justify-center">
          <p
            ref={textRef}
            className="logoTxt text-7xl  font-extrabold text-white relative top-40 md:top-25 md:text-[15vw]"
          >
            MOJITO
          </p>
        </div>

        {/* Text & Description */}
        <div className="flex items-center justify-between md:flex-row md:gap-0 gap-50 flex-col relative top-50 px-10">
          <div>
            <p className="text-white">Cool. Crisp. Classic.</p>
            <p ref={descRef} className="text-yellow-100 font-bold text-4xl ">
              Sip the Spirit of Summer
            </p>
          </div>
          <div className="libertinus-font w-[200px] flex md:items-start items-center justify-center md:w-100 flex-col max-w-[500px] ">
            <p ref={lineRef} className="text-white ">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
            <p className="underline text-green-400">View cocktails</p>
          </div>
        </div>

        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
          src="/images/noise.png"
          alt="noise background"
        />
        {/* Leaves */}
        <img
          ref={leftLeafRef}
          className="absolute top-70 md:top-10 -z-10 w-20 md:w-auto"
          src="/images/hero-left-leaf.png"
          alt="left leaf"
        />
        <img
          ref={rightLeafRef}
          className="absolute md:bottom-[-50px] bottom-[40px] right-0 z-[-1] h-40 md:h-auto"
          src="/images/hero-right-leaf.png"
          alt="right leaf"
        />
      </div>
    </>
  );
};

export default Hero;
