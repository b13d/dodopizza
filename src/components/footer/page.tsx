import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full">
      <div className="bg-orange-600 py-4 flex">
        <div className="w-[1280px] m-auto flex justify-between items-center">
          <h1 className="text-lg text-white ">
            Стань тайным покупателем Додо Пиццы и получи пиццу в подарок
          </h1>

          <button className="rounded-3xl bg-[white] px-3 py-2 text-orange-600 opacity-80 hover:opacity-100 duration-200">
            Заполнить анкету
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-[#111] pt-10">
        <div className="w-[1280px] m-auto flex mb-20">
          <div className="w-[70%] grid grid-cols-4">
            <ul className="list__footer">
              <li>
                <Link href={"/"}>Додо Пицца</Link>
              </li>
              <li>
                <Link href={"/"}>О нас</Link>
              </li>
              <li>
                <Link href={"/"}>Додо-книга</Link>
              </li>
              <li>
                <Link href={"/"}>Блог "Сила ума"</Link>
              </li>
              <li>
                <Link href={"/"}>Додо ИС</Link>
              </li>
            </ul>
            <ul className="list__footer">
              <li>
                <Link href={"/"}>Работа</Link>
              </li>
              <li>
                <Link href={"/"}>В пиццерии</Link>
              </li>
            </ul>
            <ul className="list__footer">
              <li>
                <Link href={"/"}>Партнерам</Link>
              </li>
              <li>
                <Link href={"/"}>Франшиза</Link>
              </li>
              <li>
                <Link href={"/"}>Инвестиции</Link>
              </li>
              <li>
                <Link href={"/"}>Поставщикам</Link>
              </li>
              <li>
                <Link href={"/"}>Предложить помещение</Link>
              </li>
            </ul>
            <ul className="list__footer">
              <li>
                <Link href={"/"}>Это интересно</Link>
              </li>
              <li>
                <Link href={"/"}>Почему мы готовим без перчаток?</Link>
              </li>
              <li>
                <Link href={"/"}>Экскурсии и мастер классы</Link>
              </li>
              <li>
                <Link href={"/"}>Корпоративные заказы</Link>
              </li>
            </ul>
          </div>

          <div className="w-[30%] text-white flex justify-end">
            Ссылки на соц. сети
          </div>
        </div>
        <div className="flex gap-6 w-[1280px] m-auto">
          <div className="max-w-xs">
            <h1 className="text-2xl text-white">4 525 387 608 ₽</h1>
            <p className="text-gray-500 text-sm">
              Выручка российской сети в этом месяце. В прошлом — 6 549 158 371 ₽
            </p>
          </div>

          <div className="max-w-xs">
            <h1 className="text-2xl text-white">987 пиццерий</h1>
            <p className="text-gray-500 text-sm">
              в 18 странах, от Великобритании до Нигерии
            </p>
          </div>
        </div>

        <div className="w-[1280px] m-auto pt-10">
          <hr className="border-gray-600 opacity-50" />

          <h1 className="text-gray-200 text-center py-5">
            developed by Danila Boltach
          </h1>
        </div>
      </div>
    </section>
  );
}
