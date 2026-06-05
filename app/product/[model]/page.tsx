"use client";

import { use, useState } from "react";
import { getProductByModel } from "@/app/data/catalog";
import { notFound } from "next/navigation";
import Image from "next/image";
import BuyButton from "@/app/components/BuyButton/BuyButton";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ProductPageProps {
  params: Promise<{
    model: string;
  }>;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const decodedModel = decodeURIComponent(resolvedParams.model);
  const product = getProductByModel(decodedModel);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  if (!product) {
    notFound();
  }

  const mockImages = [product.preview, product.preview, product.preview];
  const mockSpecs = [
    { label: "Процессор", value: "Intel Core i5-6200U" },
    { label: "Оперативная память", value: "8 ГБ DDR4" },
    { label: "Накопитель", value: "256 ГБ SSD" },
    { label: "Диагональ экрана", value: '14.0" (1920x1080) IPS' },
    { label: "Видеокарта", value: "Intel HD Graphics" },
    { label: "Операционная система", value: "Olmi" },
  ];
  const mockReviews = [
    {
      id: 1,
      author: "Алексей С.",
      rating: 5,
      text: "Отличный рабочий ноутбук! Клавиатура просто лучшая на рынке, печатать одно удовольствие.",
      date: "12 мая 2026",
    },
    {
      id: 2,
      author: "Елена В.",
      rating: 4,
      text: "Взяла для учебы и работы с документами. Очень легкий и надежный.",
      date: "3 апреля 2026",
    },
  ];

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % mockImages.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex(
      (prev) => (prev - 1 + mockImages.length) % mockImages.length,
    );
  };

  const goToDot = (index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  };

  // Обработчики свайпов
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextImage();
    } else if (distance < -minSwipeDistance) {
      prevImage();
    }

    setTouchStartX(null);
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex-grow px-4 lg:px-[10rem] 2xl:px-[19rem] py-8 lg:py-24 bg-gray-50/50"
    >
      <motion.div variants={itemVariants}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 bg-[#9C6B30] text-white p-2 px-4 text-2xl rounded-2xl font-bold hover:opacity-80 transition-opacity"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Вернуться в каталог</span>
        </Link>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl p-6 lg:p-12 border border-gray-100"
      >
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 flex flex-col gap-4"
          >
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full aspect-square rounded-2xl bg-gray-50/80 border border-gray-100 overflow-hidden flex items-center justify-center touch-pan-y"
            >
              <button
                onClick={prevImage}
                className={`absolute left-4 z-20 bg-[#9c6b30] hover:bg-[#835928] text-white p-3 rounded-full transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-label="Предыдущее фото"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentImageIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { duration: 0.5, ease: "easeInOut" },
                    opacity: { duration: 0.4 },
                  }}
                  className="absolute inset-0 p-8 flex items-center justify-center"
                >
                  <Image
                    src={mockImages[currentImageIndex]}
                    alt={`${product.model} - Фото ${currentImageIndex + 1}`}
                    fill
                    className="object-contain p-8 mix-blend-multiply pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={nextImage}
                className={`absolute right-4 z-20 bg-[#9c6b30] hover:bg-[#835928] text-white p-3 rounded-full transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-label="Следующее фото"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-2">
              {mockImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToDot(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-[#9C6B30] w-6"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-1.5 bg-green-50 border border-green-100 text-green-700 text-sm font-bold rounded-full w-max mb-6"
            >
              В наличии
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight"
            >
              {product.model}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-black text-[#9C6B30] mb-8"
            >
              {product.price.toLocaleString("ru-RU")} ₽
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-8 text-gray-600 text-lg leading-relaxed bg-gray-50/50 p-6 rounded-2xl border border-gray-50"
            >
              <p>
                Надежный и производительный ноутбук бизнес-класса. Модель{" "}
                <b className="text-gray-900">{product.model}</b> идеально
                подходит для профессионалов, которым важна стабильность,
                безопасность данных и комфорт в повседневной работе.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full max-w-md pt-4"
            >
              <BuyButton model={product.model} label="Добавить в корзину" />
            </motion.div>
          </motion.div>
        </section>

        <motion.hr variants={itemVariants} className="my-16 border-gray-100" />

        <motion.section variants={containerVariants} className="mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
          >
            <span className="w-2 h-8 bg-[#9C6B30] rounded-full inline-block"></span>
            Характеристики
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {mockSpecs.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex justify-between items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
              >
                <span className="text-gray-500">{spec.label}</span>
                <span className="font-semibold text-gray-900 text-right">
                  {spec.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={containerVariants}>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
          >
            <span className="w-2 h-8 bg-[#9C6B30] rounded-full inline-block"></span>
            Отзывы покупателей с <strong>Avito</strong>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockReviews.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gray-50/80 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="font-bold text-xl text-gray-900">
                    {review.author}
                  </div>
                  <div className="flex gap-1 text-[#9C6B30]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "fill-current"
                            : "text-gray-200 fill-current"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4 text-lg">
                  {review.text}
                </p>
                <div className="text-sm font-medium text-gray-400">
                  {review.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </motion.main>
  );
}
