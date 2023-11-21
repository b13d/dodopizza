import React from "react";

export default function Footer() {
  return (
    <section className="w-full">
      <div className="bg-orange-600 py-4 flex">
        <div className="w-[1280px] m-auto flex justify-between items-center">
          <h1 className="text-lg text-white ">
            Стань тайным покупателем Додо Пиццы и получи пиццу в подарок
          </h1>

          <button className="rounded-3xl bg-[white] px-3 py-2 text-orange-600">
            Заполнить анкету
          </button>
        </div>
      </div>
      <div className="bg-[#111]">Footer</div>
    </section>
  );
}
