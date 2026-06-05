"use client";

import { useState, useEffect, useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";

interface ProductItem {
  id: number | string;
  model: string;
  preview: any;
  price: number;
}

interface ProductCategoryProps {
  title: string;
  products: ProductItem[];
  mobileCols: 1 | 2; // Добавили тип для пропа
}

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

      <h1
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
      </h1>

      <div
        className={`w-full grid gap-4 md:gap-6 ${
          mobileCols === 1 ? "grid-cols-1" : "grid-cols-2"
        } md:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]`}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            model={product.model}
            preview={product.preview}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
