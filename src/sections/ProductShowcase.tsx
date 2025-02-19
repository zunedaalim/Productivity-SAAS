import productImage from "@/assets/product-image.png";
import Image from "../../node_modules/next/image";
import pyramid from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-wrapper ">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>

          <h2 className="section-title mt-5">
            A more effective way to track your progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template..
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="Product Image"
            draggable="false"
            className="mt-10"
          ></Image>
          <Image
            src={pyramid}
            alt="Pyramid Image"
            height={262}
            width={262}
            className=" hidden md:block absolute -right-36 -top-32"
          ></Image>
          <Image
            src={tubeImage}
            alt="TubeImage"
            height={248}
            className=" hidden md:block absolute bottom-24 -left-36"
          ></Image>
        </div>
      </div>
    </section>
  );
};
