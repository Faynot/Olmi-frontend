import AboutUs from "./modules/AboutUs/AboutUs";
import GreeteBlock from "./modules/GreeteBlock/GreeteBlock";
import Products from "./modules/Products/Products";
import placeholder from "@/public/assets/placeholder.png";
import SourceCode from "./modules/SourceCode/SourceCode";

// Тот самый единый массив с данными
const catalogData = [
  {
    id: 1,
    title: "Olmi Comfort",
    products: [
      { id: 1, model: "ThinkPad T470", preview: placeholder, price: 12500 },
      { id: 2, model: "ThinkPad L470", preview: placeholder, price: 12500 },
      { id: 3, model: "ThinkPad T560", preview: placeholder, price: 12500 },
      {
        id: 4,
        model: "Dell Latitude 5480",
        preview: placeholder,
        price: 12500,
      },
    ],
  },
  {
    id: 2,
    title: "Olmi Home",
    products: [
      { id: 1, model: "ThinkPad T450", preview: placeholder, price: 10000 },
      { id: 2, model: "ThinkPad L460", preview: placeholder, price: 10000 },
      { id: 3, model: "ThinkPad T550", preview: placeholder, price: 10000 },
      {
        id: 4,
        model: "Dell Latitude E5470",
        preview: placeholder,
        price: 10000,
      },
    ],
  },
  {
    id: 3,
    title: "Olmi Classic",
    products: [
      { id: 1, model: "ThinkPad T440", preview: placeholder, price: 10000 },
      { id: 2, model: "ThinkPad L450", preview: placeholder, price: 10000 },
      { id: 3, model: "ThinkPad W540", preview: placeholder, price: 10000 },
      {
        id: 4,
        model: "Dell Latitude E6440",
        preview: placeholder,
        price: 10000,
      },
      {
        id: 5,
        model: "Dell Latitude E7440",
        preview: placeholder,
        price: 10000,
      },
    ],
  },
  {
    id: 4,
    title: "Olmi Travel",
    products: [
      { id: 1, model: "ThinkPad T450s", preview: placeholder, price: 10000 },
      { id: 2, model: "ThinkPad T470s", preview: placeholder, price: 10000 },
      {
        id: 3,
        model: "ThinkPad X1 Carbon",
        preview: placeholder,
        price: 10000,
      },
      {
        id: 4,
        model: "Dell Latitude E7450",
        preview: placeholder,
        price: 10000,
      },
      {
        id: 5,
        model: "Dell Latitude 7490",
        preview: placeholder,
        price: 10000,
      },
    ],
  },
  {
    id: 4,
    title: "Olmi Compact",
    products: [
      { id: 1, model: "ThinkPad X250", preview: placeholder, price: 10000 },
      { id: 2, model: "ThinkPad X270", preview: placeholder, price: 10000 },
      {
        id: 3,
        model: "Dell Latitude E7250",
        preview: placeholder,
        price: 10000,
      },
      {
        id: 4,
        model: "Dell Latitude E7280",
        preview: placeholder,
        price: 10000,
      },
    ],
  },
];

export default function Home() {
  return (
    <div>
      <GreeteBlock />
      <Products categories={catalogData} />
      <AboutUs />
      <SourceCode link="https://codeberg.org/org/Olmi/dashboard" />
      <button className="block mx-auto text-2xl lg:text-4xl py-3 lg:py-6 px-6 lg:px-12 bg-[#23254B] font-black rounded-2xl lg:rounded-4xl text-white mt-16 hover:scale-105 transition-all cursor-pointer hover:opacity-80 active:scale-95">
        Поддержать проект
      </button>
    </div>
  );
}
