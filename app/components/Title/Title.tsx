import smile from "@/public/assets/smile.svg";
import Image from "next/image";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex flex-col w-fit mx-auto my-10 lg:my-20">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl text-[#9C6B30] font-black text-center leading-none">
        {title}
      </h1>
      <Image src={smile} alt="Smile" className="self-end mt-2 w-32 lg:w-auto" />
    </div>
  );
};

export default Title;
