import type { FC } from "react";

interface AboutUsFAQProps {
  question: string;
  answer: string;
  layout: "left" | "right" | "split";
  images: string[]; // Массив URL картинок
}

const AboutUsFAQ: FC<AboutUsFAQProps> = ({
  question,
  answer,
  layout,
  images,
}) => {
  // Уменьшили внутренний отступ p-6 до p-4 на мобилке, на десктопе возвращаем lg:p-6
  const baseText = "bg-white border-4xl p-4 lg:p-6";

  // На мобильном блоки занимают всю ширину (col-span-full), на десктопе возвращаются к сетке
  const textSpan =
    layout === "split"
      ? "col-span-full lg:col-span-6 " + baseText
      : "col-span-full lg:col-span-8 " + baseText;

  // Для картинок на мобилке задаем высоту h-48 (на планшетах sm:h-64), на десктопе — lg:h-full
  const imgSpan =
    layout === "split"
      ? "col-span-full lg:col-span-3 h-48 sm:h-64 lg:h-full"
      : "col-span-full lg:col-span-4 h-48 sm:h-64 lg:h-full";

  // Функция, которая находит текст между ** и делает его жирным
  const parseBoldText = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-black text-[#23254B]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    // Переключаем сетку: grid-cols-1 для мобилки, lg:grid-cols-12 для десктопа
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 w-full my-4 lg:my-8 items-stretch">
      {/* Левое изображение */}
      {(layout === "left" || layout === "split") && (
        <div className={imgSpan}>
          <img
            src={images[0]}
            alt=""
            className="w-full h-full object-cover rounded-4xl shadow-sm"
          />
        </div>
      )}

      {/* Блок текста с адаптивными размерами шрифта */}
      <div className={`${textSpan} whitespace-pre-line`}>
        <div className="text-2xl lg:text-4xl font-black mb-3 text-[#9C6B30]">
          {parseBoldText(question)}
        </div>
        <p className="text-base lg:text-2xl">{parseBoldText(answer)}</p>
      </div>

      {/* Правое изображение */}
      {(layout === "right" || layout === "split") && (
        <div className={imgSpan}>
          <img
            src={layout === "split" ? images[1] || images[0] : images[0]}
            alt=""
            className="w-full h-full object-cover rounded-4xl shadow-sm"
          />
        </div>
      )}
    </div>
  );
};

export default AboutUsFAQ;
