"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "../../node_modules/next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  // To Track scrollY positions
  // const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  // useMotionValueEvent(translateY, "change", (latestValue) =>
  //   console.log(latestValue)
  // );

  return (
    <section
      ref={heroRef}
      className=" pt-8 pb-20 md:pt-5 md:pb-10  bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is Here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">
              Find Joy in Your Progress. Our app makes tracking your
              achievements, staying motivated, and celebrating your successes
              genuinely rewarding..
            </p>
            <div className="flex gap-1 items-center mt-[30px] ">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5 " />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              draggable={false}
              src={cogImage.src}
              alt="cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            ></motion.img>
            <motion.img
              draggable="false"
              src={cylinderImage.src}
              alt={"Cylinder Image"}
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            ></motion.img>
            <motion.img
              draggable="false"
              src={noodleImage.src}
              alt="Noodle Image"
              width={220}
              className=" hidden lg:block rotate-[30deg] absolute top-[524px] left-[448px]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            ></motion.img>
          </div>
        </div>
      </div>
    </section>
  );
};
