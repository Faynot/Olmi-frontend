import Image from "next/image";
import type { FC } from "react";
import Link from "next/link";

import sourceCode from "@/public/assets/source-code.svg";

interface SourceCodeProps {
  link: string;
}

const SourceCode: FC<SourceCodeProps> = ({ link }) => {
  return (
    <div className="flex justify-center mt-8">
      <Link
        href={link}
        className="group flex flex-col items-center w-max transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Image
          src={sourceCode}
          alt="Source Code"
          className="transition-opacity duration-300 group-hover:opacity-80"
        />

        <h1 className="text-[#9C6B30] font-black text-4xl text-center mt-6 transition-colors duration-300 group-hover:text-[#b8823d]">
          Исходный код
        </h1>
      </Link>
    </div>
  );
};

export default SourceCode;
