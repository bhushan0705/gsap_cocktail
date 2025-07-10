import React, { useRef, useState } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Types = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const recipeRef = useRef();
  const imageChangeRef = useRef();
  const descriptionRef = useRef();

  function preImg() {
    console.log("this is pre image function");
    // If we're at the first image, go to the last one (loop back)
    if (currentImage === 0) {
      setCurrentImage(sliderLists.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  function nextImg() {
    console.log("this is next image function");
    if (currentImage === sliderLists.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function handleNavigation(index) {
    console.log("this is handle navigation function");
    // console.log(index+1);
    setCurrentImage(index);
  }


  useGSAP(()=>{
    const imgChangeTl = gsap.timeline({
         ease: "power2.inOut",
    })
    
    imgChangeTl.fromTo(recipeRef.current,{
        opacity: 0,
        y: -20,
        }, {
        opacity: 1,
        y: 0,
        })
        .fromTo(imageChangeRef.current, {
        scale: 0.8,
        x: -200,
        opacity:0,
        }, {
        scale: 1,
        x: 0,
        // duration: 0.05,
        opacity: 1,
        })
        .fromTo(descriptionRef.current, {
        opacity: 0,
        y: -20,
        }, {
        opacity: 1,
        y: 0,
        });
    },[currentImage])
  return (
    <div className="h-[100vh] p-20">
      {/* navigation */}
      <div className="flex flex-wrap gap-26 justify-between text-2xl items-center p-5 mb-[10px]">
        {sliderLists.map((item, index) => (
          <div key={index} className="">
            <p
              className={`cursor-pointer px-3 py-1 border-b-2 transition 
    ${
      index === currentImage
        ? "border-amber-400 text-white"
        : "border-white/60 text-white/60"
    }`}
              onClick={() => handleNavigation(index)}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* image section with pre and next session */}
      <div className="h-auto grid grid-cols-3 ">
        <div className="flex flex-col items-center justify-center gap-10">
          <div
            onClick={preImg}
            className="flex flex-col items-start justify-center"
          >
            <p className="text-xl font-bold hover:text-amber-200">Pre Image</p>
            <img src="/images/right-arrow.png" alt="" />
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <p>Recipe for:</p>
            <p ref={recipeRef} className="font-bold text-3xl text-amber-200 w-[100px]">
              {sliderLists[currentImage].name}
            </p>
          </div>
        </div>

        <div>
          <img
          ref={imageChangeRef}
            className="h-[400px]"
            src={sliderLists[currentImage].image}
            alt="img"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div
            onClick={nextImg}
            className="flex flex-col items-end justify-center"
          >
            <p className="text-xl font-bold hover:text-amber-200">Next Image</p>
            <img src="/images/left-arrow.png" alt="" />
          </div>

          <div ref={descriptionRef} className="w-[400px] flex flex-col items-start justify-center">
            <p className="text-3xl font-bold mb-6">
              {sliderLists[currentImage].title}
            </p>
            <p className="libertinus-font ">{sliderLists[currentImage].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
