import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="w-[1280px] m-auto flex justify-between items-center">
      <ul className="flex gap-4">
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Завтрак</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Пицца</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Комбо</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Закуски</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Коктейли</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Кофе</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Десерты</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Напитки</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Соусы</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Другие товары</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm name__block">Акции</li>
        </Link>
      </ul>

      <button className="bg-orange-500 rounded-3xl text-white py-2 px-3 hover:bg-orange-700 duration-150">
        Корзина
      </button>
    </nav>
  );
}
