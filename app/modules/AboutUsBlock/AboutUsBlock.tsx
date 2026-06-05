import Image from "next/image";
import type { FC } from "react";

import logo from "@/public/assets/logo.svg";

const AboutUsBlock: FC = () => {
  return (
    <div className="relative  w-full flex items-center justify-center bg-white py-20">
      <div className="flex flex-col items-start max-w-full">
        <Image
          src={logo}
          alt="Логотип"
          className="w-[250px] sm:w-[320px] lg:w-auto h-auto"
        />
        <h1 className="font-black text-[#23254B] text-2xl sm:text-3xl lg:text-[42px] mt-4 text-left whitespace-nowrap">
          О нас. Чем занимаемся
          <br /> И почему
        </h1>
      </div>
    </div>
  );
};

export default AboutUsBlock;
