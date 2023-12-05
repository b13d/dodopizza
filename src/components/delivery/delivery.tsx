import React from "react";

export default function Delivery() {
  return (
    <section className="w-full max-w-[1280px] m-auto mb-14">
      <h1 className="px-4 text-3xl font-semibold my-12">Доставка и оплата</h1>
      <div className="p-4 max-lg:grid-cols-2 grid-cols-4 grid gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="title__delivery">60 минут или пицца бесплатно</h1>
          <p className="max-md:text-[12px]">
            Если мы не успеем доставить продукты в течение 60 минут, курьер
            подарит вам сертификат или промокод на большую пиццу 35 см на
            традиционном тесте.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="title__delivery">
            ДОДО ПИЦЦА — СЕТЬ ПИЦЦЕРИЙ № 1 В РОССИИ
          </h1>
          <p className="max-md:text-[12px]">
            по доставке пиццы по данным из отчета Euromonitor International на
            май 2017 года.
          </p>
          <p className="max-md:text-[12px]">
            Все цены в меню указаны без учета скидок.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="title__delivery">699 ₽</h1>
          <p className="max-md:text-[12px]">Минимальная сумма доставки</p>
          <h1 className="title__delivery">7 000 ₽</h1>
          <p className="max-md:text-[12px]">
            Максимальная сумма при оплате наличными
          </p>
          <p className="max-md:text-[12px]">
            Изображения продуктов могут отличаться от продуктов в заказе.
          </p>
        </div>
        <div>
          <h1 className="title__delivery">ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h1>
          <div className="overflow-hidden cursor-pointer">
            <img
              className="w-full h-full hover:scale-150 duration-200"
              alt="map"
              src="https://dodopizza-a.akamaihd.net/site-static/dist/afdce5bbb5d38204b6c6.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
