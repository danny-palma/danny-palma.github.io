import React from "react";
import { motion } from "framer-motion";
import { shaq, worldmap } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className="absolute inset-0 top-[150px] pl-5
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3"
        >
          <div>
            <h1 className="font-black text-eerieBlack lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2 font-poppins uppercase">
              Hi, I&apos;m <br />
              <span
                className="text-battleGray sm:text-[90px] 
                text-[50px] font-mova font-extrabold uppercase"
              >
                Daniel Palma
              </span>
            </h1>
            <p
              className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-eerieBlack"
            >
              Systems engineering student. <br className="sm:block hidden" />
              with excellent skills in back-end application development and
              system support.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <img
          className="absolute bottom-0 right-0 transform translate-x-1/2 object-cover
            sm:h-[60vh] md:h-[70vh] xl:h-[80vh] h-[50vh]"
          src={shaq}
          alt="shaquille"
        />
      </section>
    </>
  );
};

export default Hero;
