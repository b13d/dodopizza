import React from "react";
import { IProduct } from "../../../interfaces";

export default function Product(props: { product: IProduct }) {
  // return <h1 className="text-center">{props.num}</h1>;
  return (
    <div className="flex flex-col gap-4">
      <img src="/images/ProductItem-1.png" alt="product" />

      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-[20px]">Омлет с ветчиной и грибами</h1>
        <p className="text-[13px] text-gray-500">
          Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и
          моцарелла
        </p>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">179 ₽</h1>
        <button className="bg-[#ffb02038] rounded-3xl py-2 px-4 hover:bg-[#ffb02070] duration-150 text-orange-500">
          В корзину
        </button>
      </div>
    </div>
  );
}
