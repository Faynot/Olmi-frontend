import Image from "next/image";
import buy from "@/public/assets/buy.svg";

interface BuyButtonProps {
  model: string;
  label: string;
}

const BuyButton = ({ model, label }: BuyButtonProps) => {
  return (
    <button className="flex items-center w-full px-3 py-3 lg:p-3 bg-[#23254B] text-white font-black rounded-2xl text-xl lg:text-2xl cursor-pointer hover:bg-[#5155A1] transition-all active:scale-90">
      <div className="flex-shrink-0 mr-3">
        <Image src={buy} alt="buy" className="w-5 lg:w-7" />
      </div>

      <span className="flex-1 text-center pr-8">{label}</span>
    </button>
  );
};

export default BuyButton;
