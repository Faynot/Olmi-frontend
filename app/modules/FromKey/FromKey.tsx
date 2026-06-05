import type { FC } from "react";
import fromKey from "@/public/assets/from-key.png";
import yes from "@/public/assets/yes.svg";

import Image from "next/image";
import BuyButton from "@/app/components/BuyButton/BuyButton";
import FAQfromkey from "../FAQfromkey/FAQfromkey";

const FromKey: FC = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row bg-white rounded-3xl xl:rounded-4xl mt-6 overflow-hidden">
        {/* Убрали justify-center и items-center.
          Оставили flex, чтобы картинка могла растянуться на 100% высоты колонки.
        */}
        <div className="w-full xl:w-[30%] shrink-0 flex">
          <Image
            src={fromKey}
            alt="preview"
            // w-full h-full: заставляем картинку заполнить весь родительский div.
            // object-cover: масштабирует пропорционально, заполняя всю площадь и обрезая края.
            className="w-full h-full object-cover rounded-t-3xl xl:rounded-none xl:rounded-l-4xl"
          />
        </div>

        {/* Контентная часть осталась без изменений с прошлого фикса (кнопка в безопасности) */}
        <div className="flex-1 p-6 xl:px-6 xl:py-6 flex flex-col h-full">
          <div>
            <h2 className="text-2xl xl:text-4xl font-black mb-2 flex flex-wrap text-[#23254B] gap-2 leading-tight">
              <span className="text-[#9C6B30]">Не нашли нужную модель</span> на
              нашей витрине?
            </h2>
            <p className="text-xl xl:text-2xl font-black leading-tight">
              Соберите свой идеальный ноутбук на заказ
            </p>

            <ul className="font-black text-[#23254B] text-lg xl:text-2xl mt-4 grid gap-4">
              <li className="flex gap-4 xl:gap-6 items-center">
                <Image src={yes} alt="yes" className="shrink-0" />
                Индивидуальный подбор
              </li>
              <li className="flex gap-4 xl:gap-6 items-center">
                <Image src={yes} alt="yes" className="shrink-0" />
                Полное восстановление
              </li>
              <li className="flex gap-4 xl:gap-6 items-center">
                <Image src={yes} alt="yes" className="shrink-0" />
                Экономия
              </li>
            </ul>
          </div>

          <div className="mt-8 xl:mt-auto flex xl:justify-end w-full">
            <div className="w-full xl:w-[256px]">
              <BuyButton model="Заказать" label="Заказать" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 xl:gap-6 mt-4 xl:mt-6">
        <FAQfromkey
          question="Как это работает?"
          answer="Вы сообщаете любое желаемое устройство, мы выкупаем его, привозим в мастерскую, проводим глубокое техническое обслуживание и улучшаем его характеристики"
        />
        <FAQfromkey
          question="Почему это выгодно?"
          answer="Вы получаете проверенный, вылизанный до идеала компьютер в фирменной упаковке и с нашей гарантией. Это выйдет в 2–3 раза дешевле покупки аналогичного по мощности ноутбука в магазине, а всю рутину и риски проверки мы берем на себя"
        />
      </div>
    </div>
  );
};

export default FromKey;
