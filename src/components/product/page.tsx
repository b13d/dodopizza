"use client";

import React, { useState } from "react";
import { IProduct } from "../../../interfaces";

export default function Product(props: { product: IProduct }) {
  const [showModal, setShowModal] = useState(false);

  // return <h1 className="text-center">{props.num}</h1>;
  const handleClickShowModal = () => {
    console.log("ShowModal");
  };

  return (
    <>
      <div
        onClick={handleClickShowModal}
        className="flex flex-col w-full gap-4 h-full justify-between cursor-pointer"
      >
        <article>
          <img
            className="relative top-0 hover:translate-y-4 duration-150 ease-in"
            width={"100%"}
            src={`${props.product.images}`}
            alt="product"
          />

          <h1 className="font-medium text-[20px]">{props.product.title}</h1>
          <p className="text-[13px] text-gray-500">
            {props.product.description}
          </p>
        </article>

        {/* <div className="flex flex-col gap-2"></div> */}

        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">{props.product.price} ₽</h1>
          <button className="bg-[#ffb02038] rounded-3xl py-2 px-4 hover:bg-[#ffb02070] duration-150 text-orange-500">
            В корзину
          </button>
        </div>
      </div>
    </>
  );
}
