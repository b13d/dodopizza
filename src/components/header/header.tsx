import { useContext } from "react";
import TemporaryDrawer from "../basket/basket";

export default function Header() {
  return (
    <>
      <section className="max-md:hidden p-4 m-auto h-[54px] w-full max-w-[1280px] ">
        <ul className="flex gap-3 text-sm font-semibold">
          <a href={`/`}>
            {" "}
            <li>Прямой эфир</li>
          </a>
          <a href={`/`}>
            {" "}
            <li>Работа в Додо</li>
          </a>
          <a href={`/`}>
            {" "}
            <li>О нас</li>
          </a>
          <a href={`/`}>
            {" "}
            <li>Контакты</li>
          </a>
        </ul>
      </section>
      <hr className="opacity-50 w-full" />
      <header className=" max-w-[1280px] w-full m-auto pt-[24px] pb-[16px] flex justify-between">
        <div className="flex gap-8 max-md:hidden">
          <img src="/Logo.png" alt="logo" />

          <div>
            <h1 className="font-medium">
              Доставка пиццы{" "}
              <span className="text-orange-500 font-semibold">Астрахань</span>
            </h1>

            <span className="flex">
              32 мин
              <div>
                <i className="inline-block w-[3px] h-[3px] my-[3px] mx-[6px] rounded-[3px] bg-black"></i>
              </div>
              4.87
            </span>
          </div>
        </div>

        <div className="max-md:flex-row-reverse max-md:justify-between max-md:w-full max-md:px-4 flex flex-col items-center gap-4">
          <button className=" bg-orange-500 rounded-3xl text-white py-2 px-3 hover:bg-orange-700 duration-150">
            {<TemporaryDrawer />}
          </button>

          <div className=" flex items-center gap-6 max-md:flex-col">
            <p className="font-semibold text-sm">Додокоины</p>
            <button className="bg-gray-100 rounded-xl py-1 px-3 text-gray-500 font-semibold text-sm hover:text-gray-700 duration-150">
              Войти
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
