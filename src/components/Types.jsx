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
    if (currentImage === 0) {
      setCurrentImage(sliderLists.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  function nextImg() {
    if (currentImage === sliderLists.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function handleNavigation(index) {
    setCurrentImage(index);
  }

  useGSAP(() => {
    const imgChangeTl = gsap.timeline({ ease: "power2.inOut" });

    imgChangeTl
      .fromTo(recipeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(
        imageChangeRef.current,
        { scale: 0.8, x: -200, opacity: 0 },
        { scale: 1, x: 0, opacity: 1 }
      )
      .fromTo(descriptionRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 });
  }, [currentImage]);

  return (
    <div className="h-[100vh] py-20">
      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-5 md:gap-26 justify-center text-2xl items-center p-5 mb-[10px]">
        {sliderLists.map((item, index) => (
          <div key={index}>
            <p
              className={`cursor-pointer w-full text-center px-3 py-1 border-b-2 transition
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

      {/* Main Content Area */}
      <div className="h-auto grid grid-cols-1 md:grid-cols-3 justify-between gap-10 py-10 px-6">

        {/* LEFT COLUMN – Desktop */}
        <div className="hidden md:flex flex-col items-center justify-between gap-10">
          <div onClick={preImg} className="flex flex-col items-start justify-center">
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

        {/* MIDDLE IMAGE – Desktop Only */}
        <div className="hidden md:flex justify-center">
          <img
            ref={imageChangeRef}
            className="md:h-[350px]"
            src={sliderLists[currentImage].image}
            alt="img"
          />
        </div>

        {/* RIGHT COLUMN – Desktop */}
        <div className="hidden md:flex flex-col items-center justify-between gap-10">
          <div onClick={nextImg} className="flex flex-col items-end justify-center">
            <p className="text-xl font-bold hover:text-amber-200">Next Image</p>
            <img src="/images/left-arrow.png" alt="" />
          </div>
          <div ref={descriptionRef} className="w-[400px] flex flex-col items-start justify-center">
            <p className="text-3xl font-bold mb-6">{sliderLists[currentImage].title}</p>
            <p className="libertinus-font">{sliderLists[currentImage].description}</p>
          </div>
        </div>

        {/* 🟡 MOBILE ONLY SECTION */}
        <div className="flex md:hidden flex-col items-center gap-6">
          {/* Pre + Next Buttons in a Row */}
          <div className="w-full flex justify-between px-2">
            <div onClick={preImg} className="flex flex-col items-start">
              <p className="text-xl font-bold hover:text-amber-200">Pre Image</p>
              <img src="/images/right-arrow.png" alt="" />
            </div>
            <div onClick={nextImg} className="flex flex-col items-end">
              <p className="text-xl font-bold hover:text-amber-200">Next Image</p>
              <img src="/images/left-arrow.png" alt="" />
            </div>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center">
            <img
              ref={imageChangeRef}
              className="h-[300px] object-cover w-[80%]"
              src={sliderLists[currentImage].image}
              alt="img"
            />
          </div>

          {/* Recipe for */}
          <div className="flex flex-col items-start gap-2 w-full px-4">
            <p>Recipe for:</p>
            <p ref={recipeRef} className="font-bold text-3xl text-amber-200 w-[100px]">
              {sliderLists[currentImage].name}
            </p>
          </div>

          {/* Description */}
          <div ref={descriptionRef} className="flex flex-col items-start justify-center px-4">
            <p className="text-3xl font-bold mb-4">{sliderLists[currentImage].title}</p>
            <p className="libertinus-font">{sliderLists[currentImage].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
