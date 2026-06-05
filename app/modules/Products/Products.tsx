"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";

import Title from "@/app/components/Title/Title";
import grid from "@/public/assets/grid.svg";
import list from "@/public/assets/list.svg";

const ProductCategory = dynamic(
  () => import("../ProductCategory/ProductCategory"),
  {
    ssr: true,
  },
);
const FromKey = dynamic(() => import("../FromKey/FromKey"), {
  ssr: true,
});

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
  const [mobileCols, setMobileCols] = useState<1 | 2>(2);

  return (
    <div className="px-4 lg:px-[19rem]">
      {/* Главный заголовок */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center gap-4"
      >
        <Title title="В наличии" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center gap-1 p-1 rounded-md md:hidden mt-8"
      >
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
      </motion.div>

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

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-[#9C6B30] text-5xl md:text-3xl lg:text-4xl font-black flex mt-12 gap-2"
      >
        Olmi <span className="text-[#23254B]">Под Ключ</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FromKey />
      </motion.div>
    </div>
  );
};

export default Products;
