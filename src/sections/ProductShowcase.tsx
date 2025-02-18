import productImage from "@/assets/product-image.png";
import Image from "../../node_modules/next/image";
export const ProductShowcase = () => {
  return (
    <section>
      <div className="container">
        <div>Boost your productivity</div>
        <h2>A more effective way to track your progress</h2>
        <p>
          Effortlessly turn your ideas into a fully functional, responsive, SaaS
          website in just minutes with this template.
        </p>
        <Image src={productImage} alt="Product Image" className=""></Image>
      </div>
    </section>
  );
};
