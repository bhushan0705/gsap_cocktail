import React, { useRef } from "react";
import { openingHours, socials, storeInfo } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const righfooterLeaf = useRef();
  const leftfooterLeaf = useRef();

  useGSAP(() => {
    const footerTL = gsap.timeline();

    footerTL.to(righfooterLeaf.current, {
      x: -100,
      duration: 2,
      scrollTrigger: {
        trigger: righfooterLeaf.current,
        start: "top top",
        end: "top 20%",
        scrub: 0.4,
      },
    });

    footerTL.to(leftfooterLeaf.current, {
      x: 100,
      duration: 2,
      scrollTrigger: {
        trigger: leftfooterLeaf.current,
        start: "top 50%",
        end: "top 20%",
        scrub: 0.1,
      },
    });
  });

  return (
    <div
      id="contact"
      className="yz-font relative mt-100 md:px-10 md:py-20 flex flex-col items-center justify-center gap-10 min-h-[80vh] overflow-hidden"
    >
      {/* leaves */}
      <div>
        <img
          ref={leftfooterLeaf}
          className="absolute bottom-0 -left-0  md:left-[-100px] w-24 md:w-auto"
          src="/images/footer-left-leaf.png"
          alt=""
        />
        <img
          ref={righfooterLeaf}
          className="absolute top-0 right-0 md:right-[-100px] w-24 md:w-auto"
          src="/images/footer-right-leaf.png"
          alt=""
        />
      </div>

      {/* subtle shadow line */}
      <div className="h-[1px] rounded-full absolute top-[100%] -z-10 shadow-[0_0_200px_100px_rgba(122,122,122,0.4)]"></div>

      {/* Heading */}
      <div>
        <h1 className="md:text-6xl text-4xl font-bold">{storeInfo.heading}</h1>
      </div>

      {/* Address */}
      <div className="flex items-center justify-center flex-col text-center">
        <p className="text-xl uppercase">Visit Our Bar</p>
        <p className="md:text-3xl text-2xl">{storeInfo.address}</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <p className="text-xl uppercase">Contact Us</p>
        <p className="md:text-3xl text-2xl">{storeInfo.contact.phone}</p>
        <p className="md:text-3xl text-2xl">{storeInfo.contact.email}</p>
      </div>

      {/* Opening Hours */}
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <p className="text-xl uppercase">Open Every Day</p>
        <div className="flex flex-col items-center justify-center gap-1">
          {openingHours.map((element, index) => (
            <ul key={index + 1}>
              <li className="md:text-3xl text-2xl">
                {element.day}: {element.time}
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center flex-col gap-2">
        <p className="text-xl uppercase">Socials</p>
        <ul className="flex items-center justify-center gap-5">
          {socials.map((social, index) => (
            <li key={index + 3} className="flex">
              <a href={social.url}>
                <img src={social.icon} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
