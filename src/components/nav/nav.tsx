import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { increment, decrement } from "../../features/counter/counterSlice";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../basket/basket";

export default function Nav() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <nav className="w-[1280px] m-auto flex justify-between items-center">
      <ul className="flex gap-4">
        <a href={`/#breakfast`}>
          <li className="font-semibold text-sm name__block">Завтрак</li>
        </a>
        <a href={`/#pizza`}>
          <li className="font-semibold text-sm name__block">Пицца</li>
        </a>
        <a href={`/#combo`}>
          <li className="font-semibold text-sm name__block">Комбо</li>
        </a>
        <a href={`/#appetizers`}>
          <li className="font-semibold text-sm name__block">Закуски</li>
        </a>
        <a href={`/#cocktails`}>
          <li className="font-semibold text-sm name__block">Коктейли</li>
        </a>
        <a href={`/#coffee`}>
          <li className="font-semibold text-sm name__block">Кофе</li>
        </a>
        <a href={`/#beverages`}>
          <li className="font-semibold text-sm name__block">Десерты</li>
        </a>
        <a href={`/#desserts`}>
          <li className="font-semibold text-sm name__block">Напитки</li>
        </a>
        <a href={`/#sauces`}>
          <li className="font-semibold text-sm name__block">Соусы</li>
        </a>
        <a href={`/#other-products`}>
          <li className="font-semibold text-sm name__block">Другие товары</li>
        </a>
      </ul>

      <button className="bg-orange-500 rounded-3xl text-white py-2 px-3 hover:bg-orange-700 duration-150">
        {<TemporaryDrawer />}
      </button>
    </nav>
  );
}
