"use client";

import { useState } from "react";
import Title from "@/app/components/Title/Title";
import ProductCategory from "../ProductCategory/ProductCategory";
import FromKey from "../FromKey/FromKey";

import grid from "@/public/assets/grid.svg";
import list from "@/public/assets/list.svg";
import Image from "next/image";

interface ProductItem {
  id: number | string;
  model: string;
  preview: any;
  price: number;
}

interface CategoryData {
  id: number | string;
  title: string;
  products: ProductItem[];
}

interface ProductsProps {
  categories: CategoryData[];
}

const Products = ({ categories }: ProductsProps) => {
  // Устанавливаем 2 столбца по умолчанию
  const [mobileCols, setMobileCols] = useState<1 | 2>(2);

  return (
    <div className="px-4 lg:px-[19rem]">
      <div className="flex justify-between items-center gap-4">
        <Title title="В наличии" />
      </div>

      <div className="flex items-center gap-1 p-1 rounded-md md:hidden mt-8">
        <button
          onClick={() => setMobileCols(2)}
          style={{ opacity: mobileCols === 2 ? 1 : 0.35 }}
          className="w-8 h-8 flex items-center justify-center text-sm font-bold rounded transition-all duration-200"
        >
          <Image src={grid} alt="сетка" />
        </button>

        <button
          onClick={() => setMobileCols(1)}
          style={{ opacity: mobileCols === 1 ? 1 : 0.35 }}
          className="w-8 h-8 flex items-center justify-center text-sm font-bold rounded transition-all duration-200"
        >
          <Image src={list} alt="список" />
        </button>
      </div>

      <div className="flex flex-col gap-12 mt-8">
        {categories.map((category) => (
          <ProductCategory
            key={category.id}
            title={category.title}
            products={category.products}
            mobileCols={mobileCols}
          />
        ))}
      </div>

      <h1 className="text-[#9C6B30] text-5xl md:text-3xl lg:text-4xl font-black flex mt-12 gap-2">
        Olmi <span className="text-[#23254B]">Под Ключ</span>
      </h1>
      <FromKey />
    </div>
  );
};

export default Products;
