import { Typography } from "@mui/material";
import React from "react";

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
        <div className="w-[1280px] m-auto flex mb-20 justify-between">
          <div className="w-[70%] grid grid-cols-4">
            <ul className="list__footer">
              <li>
                <a href={"/"}>Додо Пицца</a>
              </li>
              <li>
                <a href={"/"}>О нас</a>
              </li>
              <li>
                <a href={"/"}>Додо-книaга</a>
              </li>
              <li>
                <a href={"/"}>Блог "Сила ума"</a>
              </li>
              <li>
                <a href={"/"}>Додо ИС</a>
              </li>
            </ul>
            <ul className="list__footer">
              <li>
                <a href={"/"}>Работа</a>
              </li>
              <li>
                <a href={"/"}>В пиццерии</a>
              </li>
            </ul>
            <ul className="list__footer">
              <li>
                <a href={"/"}>Партнерам</a>
              </li>
              <li>
                <a href={"/"}>Франшиза</a>
              </li>
              <li>
                <a href={"/"}>Инвестиции</a>
              </li>
              <li>
                <a href={"/"}>Поставщикам</a>
              </li>
              <li>
                <a href={"/"}>Предложить помещение</a>
              </li>
            </ul>
            <ul className="list__footer">
              <li>
                <a href={"/"}>Это интересно</a>
              </li>
              <li>
                <a href={"/"}>Почему мы готовим без перчаток?</a>
              </li>
              <li>
                <a href={"/"}>Экскурсии и мастер классы</a>
              </li>
              <li>
                <a href={"/"}>Корпоративные заказы</a>
              </li>
            </ul>
          </div>

          <div className=" text-white flex  flex-col items-center gap-4">
            <Typography variant="h6">Мы еще есть тут:</Typography>
            <img
              src="/public/images/socials/app-gallery.png"
              className="cursor-pointer w-[150px] h-[50px] rounded-lg"
              alt="social"
            />
            <img
              className="cursor-pointer w-[150px] h-[50px] rounded-lg"
              src="/public/images/socials/apple-store.png"
              alt="social"
            />
            <img
              className="cursor-pointer w-[150px] h-[50px] rounded-lg"
              src="/public/images/socials/google-play.png"
              alt="social"
            />
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
