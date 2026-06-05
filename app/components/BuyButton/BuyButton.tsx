import Image from "next/image";
import buy from "@/public/assets/buy.svg";

interface BuyButtonProps {
  model: string;
  label: string;
}

const BuyButton = ({ model, label }: BuyButtonProps) => {
  return (
    <button className="relative flex items-center justify-center w-full p-2.5 lg:p-3 bg-[#23254B] text-white font-black rounded-2xl text-xl lg:text-2xl cursor-pointer hover:bg-[#5155A1] transition-all active:scale-90">
      <div className="absolute left-3 flex items-center">
        <Image src={buy} alt="buy" className="w-5 lg:w-auto" />
      </div>

      <span className="text-center">{label}</span>
    </button>
  );
};

export default BuyButton;
