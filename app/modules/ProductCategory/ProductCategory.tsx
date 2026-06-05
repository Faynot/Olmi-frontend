"use client";

import { useState, useEffect, useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { motion, Variants } from "framer-motion";

interface ProductItem {
  id: number | string;
  model: string;
  preview: any;
  price: number;
}

interface ProductCategoryProps {
  title: string;
  products: ProductItem[];
  mobileCols: 1 | 2;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProductCategory = ({
  title,
  products,
  mobileCols,
}: ProductCategoryProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerHeight = "64px";

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        rootMargin: `-${headerHeight} 0px 0px 0px`,
      },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full flex flex-col gap-6 relative">
      <div
        ref={sentinelRef}
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
      />

      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`
        text-[#9C6B30] text-5xl font-black
        sticky top-0 z-10 py-6 transition-colors duration-200
        -mx-4 px-4
        ${isSticky ? "bg-white shadow-md" : "bg-transparent"}
        md:static md:bg-transparent md:py-0 md:z-auto md:mx-0 md:px-0
        md:text-3xl lg:text-4xl
        md:shadow-none
      `}
      >
        {title}
      </motion.h1>

      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "100px" }}
        className={`w-full grid gap-4 md:gap-6 ${
          mobileCols === 1 ? "grid-cols-1" : "grid-cols-2"
        } md:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]`}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            layout
            transition={{
              layout: { type: "spring", stiffness: 250, damping: 25 },
            }}
          >
            <ProductCard
              model={product.model}
              preview={product.preview}
              price={product.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductCategory;
