"use client";

import { useState } from "react";
import Image from "next/image";
// Предполагаем, что пути к ассетам верны
import miniLogo from "@/public/assets/mini-logo.svg";
import search from "@/public/assets/search.svg";
import badEye from "@/public/assets/bad-eye.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Общие стили для линий бургера, чтобы избежать дублирования
  const lineBaseClass =
    "absolute h-1 w-8 rounded-full bg-[#9c6b30] transition-all duration-300 ease-in-out";

  return (
    <header className="font-black p-4 shadow-md fixed z-50 w-full bg-white bottom-0 lg:top-0 lg:bottom-auto">
      <div className="flex justify-between items-center lg:grid lg:grid-cols-3 w-full">
        {/* Логотип и десктопные ссылки */}
        <div className="flex items-center gap-4">
          <Image src={miniLogo} alt="logo" className="h-6 w-auto" />
          <div className="hidden lg:flex text-sm gap-4">
            <button>Товары</button>
            <button>О нас</button>
            <button>Поддержка</button>
          </div>
        </div>

        {/* Десктопный поиск */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-3xs">
            <input
              type="text"
              placeholder="Поиск"
              className="w-full py-1.5 pl-4 pr-10 rounded-full bg-[#FBF4EA] text-[#9C6B30] text-sm focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9C6B30] pointer-events-none w-6">
              <Image src={search} alt="search" />
            </div>
          </div>
        </div>

        {/* Десктопные контакты и бургер */}
        <div className="flex justify-end items-center gap-4">
          <div className="hidden lg:flex justify-end items-center gap-4">
            <Image src={badEye} alt="bad eye" className="w-[24px]" />
            <button className="text-sm">+7 (XXX) XXX-XX-XX</button>
          </div>

          {/* Кнопка бургера (только для мобильных) */}
          <button
            className="lg:hidden relative w-8 h-8 focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Верхняя линия */}
            <div
              className={`${lineBaseClass} ${
                isMobileMenuOpen
                  ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
                  : "top-1 left-0"
              }`}
            />
            {/* Средняя линия */}
            <div
              className={`${lineBaseClass} top-1/2 left-0 -translate-y-1/2 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Нижняя линия */}
            <div
              className={`${lineBaseClass} ${
                isMobileMenuOpen
                  ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-1 left-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {/* Изменено: bottom-full вместо top-full (чтобы меню росло вверх) */}
      <div
        className={`lg:hidden absolute bottom-full left-0 w-full bg-white shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-5 h-0 py-0 overflow-hidden" // Заменено на положительный translate-y-5
        }`}
      >
        <button className="text-lg">Товары</button>
        <button className="text-lg">О нас</button>
        <button className="text-lg">Поддержка</button>

        <div className="relative w-[90%] max-w-xs mt-2">
          <input
            type="text"
            placeholder="Поиск"
            className="w-full py-3 pl-4 pr-10 rounded-full bg-[#FBF4EA] text-[#9C6B30] text-base focus:outline-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9C6B30] pointer-events-none w-6">
            <Image src={search} alt="search" />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <Image src={badEye} alt="bad eye" className="w-[24px]" />
          <button className="text-base">+7 (XXX) XXX-XX-XX</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
