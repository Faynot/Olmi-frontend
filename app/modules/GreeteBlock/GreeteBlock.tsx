"use client";

import Image from "next/image";

import logo from "@/public/assets/logo.svg";
import arrowNext from "@/public/assets/arrow-next.svg";

const GreeteBlock = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-white px-4">
      {/* items-start гарантирует, что логотип и текст выровнены по левому краю общего контейнера */}
      <div className="flex flex-col items-start max-w-full">
        {/* Логотип теперь тоже пропорционально уменьшается на смартфонах */}
        <Image
          src={logo}
          alt="Логотип"
          className="w-[250px] sm:w-[320px] lg:w-auto h-auto"
        />
        {/* Текст строго слева (text-left) и плавно увеличивается в зависимости от экрана */}
        <h1 className="font-black text-[#9C6B30] text-2xl sm:text-3xl lg:text-[42px] mt-4 text-left whitespace-nowrap">
          Надёжнее нового
        </h1>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-20 lg:bottom-20 transition-transform hover:scale-110 cursor-pointer active:scale-90 bg-[#FBF4EA] flex items-center justify-center w-20 h-20 lg:w-[115px] lg:h-[115px] rounded-full"
        aria-label="Скролл вниз"
      >
        <Image src={arrowNext} alt="Вниз" className="w-1/2 lg:w-auto" />
      </button>
    </div>
  );
};

export default GreeteBlock;
