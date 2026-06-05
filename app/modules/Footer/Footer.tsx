import Image from "next/image";
import type { FC } from "react";

import logo from "@/public/assets/footer-logo.svg";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-[#23254B] p-6 pb-64 md:p-16 md:pb-64 mt-8 md:mt-16 text-white">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_auto] gap-10 md:gap-12 px-4 lg:px-[19rem]">
        <div className="space-y-2">
          <Image src={logo} alt="Footer Logo" className="mb-6 md:mb-8" />
          <p>Самозанятый Кузьмин Никита Юрьевич</p>
          <p>ИНН 615490798814</p>
          <p>faynot@tutamail.com</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <ul className="gap-2 grid content-start">
            <h2 className="font-black mb-1 md:mb-2">О Olmi</h2>
            <li className="cursor-pointer">О нас</li>
            <li className="cursor-pointer">Новости</li>
          </ul>

          <ul className="gap-2 grid content-start">
            <h2 className="font-black mb-1 md:mb-2">Продукты и услуги</h2>
            <li className="cursor-pointer">Ноутбуки</li>
            <li className="cursor-pointer">Под ключ</li>
            <li className="cursor-pointer">ПК</li>
          </ul>

          <ul className="gap-2 grid content-start">
            <h2 className="font-black mb-1 md:mb-2">Связаться с нами</h2>
            <li className="cursor-pointer">olmi@tutamail.com</li>
            <li className="cursor-pointer">+7 (XXX) XXX-XX-XX</li>
            <li className="cursor-pointer">Поддержка</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
