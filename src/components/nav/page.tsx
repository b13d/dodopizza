import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="w-[1280px] m-auto flex justify-between items-center">
      <ul className="flex gap-4">
        <Link href={`/`}>
          <li className="font-semibold text-sm">Завтрак</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Пицца</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Комбо</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Закуски</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Коктейли</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Кофе</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Десерты</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Напитки</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Соусы</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Другие товары</li>
        </Link>
        <Link href={`/`}>
          <li className="font-semibold text-sm">Акции</li>
        </Link>
      </ul>

      <button className="bg-orange-500 rounded-3xl text-white py-2 px-3 hover:bg-orange-700 duration-150">
        Корзина
      </button>
    </nav>
  );
}
