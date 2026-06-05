import Image from "next/image";
import type { FC } from "react";
import faq from "@/public/assets/faq.svg";

interface FAQfromkeyProps {
  question: string;
  answer: string;
}

const FAQfromkey: FC<FAQfromkeyProps> = ({ question, answer }) => {
  return (
    // На десктопе (xl) работает твой w-1/2, на экранах поменьше - w-full
    <div className="bg-white p-5 xl:p-6 rounded-3xl xl:rounded-4xl w-full xl:w-1/2 xl:basis-1/2">
      <div className="flex items-center font-black text-[#23254B] mb-4 xl:mb-6">
        <Image
          src={faq}
          alt="Frequently Asked Questions"
          className="w-8 h-8 xl:w-auto xl:h-auto shrink-0"
        />
        <h1 className="text-2xl xl:text-4xl ml-4 xl:ml-6 leading-tight">
          {question}
        </h1>
      </div>
      <p className="text-lg xl:text-2xl">{answer}</p>
    </div>
  );
};

export default FAQfromkey;
