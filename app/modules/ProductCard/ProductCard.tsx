// app/modules/ProductCard/ProductCard.tsx
import BuyButton from "@/app/components/BuyButton/BuyButton";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  model: string;
  preview: string | StaticImageData;
  price: number;
}

const ProductCard = ({ model, preview, price }: ProductCardProps) => {
  // Кодируем название модели для использования в URL (заменяем пробелы и спецсимволы)
  const productUrl = `/product/${encodeURIComponent(model)}`;

  return (
    <article className="w-full h-full bg-white p-4 lg:p-5 rounded-4xl flex flex-col gap-4 relative group">
      <Link
        href={productUrl}
        className="flex flex-col flex-grow gap-4 cursor-pointer"
      >
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center p-4 transition-transform group-hover:scale-105">
          <Image
            src={preview}
            alt={model}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>

        <div className="flex flex-col flex-grow gap-1">
          <p className="text-[#9C6B30] font-black text-xl lg:text-2xl mt-auto pt-2">
            {price.toLocaleString("ru-RU")} ₽
          </p>
          <h2
            className="text-black font-bold text-xl lg:text-2xl leading-tight line-clamp-2 group-hover:text-[#23254B] transition-colors"
            title={model}
          >
            {model}
          </h2>
        </div>
      </Link>

      <div className="w-full pt-2">
        <BuyButton model={model} label="Купить" />
      </div>
    </article>
  );
};

export default ProductCard;
