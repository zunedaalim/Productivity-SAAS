import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import cellestialLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="Acme Logo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="QuantumLogo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={cellestialLogo}
              alt="CellestialLogo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="PulseLogo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="ApexLogo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
