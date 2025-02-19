import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "../../node_modules/next/image";
export const Hero = () => {
  return (
    <section className=" pt-8 pb-20 md:pt-5 md:pb-10  bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is Here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
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
            <Image
              draggable="false"
              src={cogImage}
              alt="cog"
              width={500}
              height={500}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            ></Image>
            <Image
              draggable="false"
              src={cylinderImage}
              alt={"Cylinder Image"}
              width={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            ></Image>
            <Image
              draggable="false"
              src={noodleImage}
              alt="Noodle Image"
              width={220}
              className=" hidden lg:block rotate-[30deg] absolute top-[524px] left-[448px]"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
