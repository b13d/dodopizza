"use client";

import React, { useState } from "react";
import { IFrequentlyOrdered, IProduct } from "../../../interfaces";
import ModalWindow from "../modal/modal";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment, decrement } from "../../features/counter/counterSlice";
import { productAdd } from "../../features/products/productsSlice";

export default function Product(props: { product: IProduct }) {
  const [showModal, setShowModal] = useState(false);
  const [countBuy, setCountBuy] = useState(0);
  const dispatch = useAppDispatch();

  const currentId = useAppSelector((state) => state.products.id);

  // return <h1 className="text-center">{props.num}</h1>;
  const handleClickShowModal = () => {
    if (!showModal) {
      setShowModal(true);
      console.log("ShowModal");
    }
  };

  const handleClickBuy = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newProduct: IFrequentlyOrdered = {
      id: currentId,
      description: props.product.description,
      images: props.product.images,
      name: props.product.title,
      oldPrice: 0,
      price: Number(props.product.price),
    };

    console.log(newProduct);

    dispatch(productAdd(newProduct));

    setCountBuy((value) => value + 1);
    event.stopPropagation();
    dispatch(increment(props.product.price));
  };

  const handleClickRemove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCountBuy((value) => value - 1);
    event.stopPropagation();
    dispatch(decrement(props.product.price));
  };

  return (
    <>
      <div
        onClick={handleClickShowModal}
        className="flex flex-col w-full gap-4 h-full justify-between cursor-pointer"
      >
        {showModal && (
          <ModalWindow
            open={showModal}
            title={props.product.title}
            description={props.product.description}
            src={props.product.images[0]}
            setShowModal={setShowModal}
            price={props.product.price.toString() + " ₽"}
            setCountBuy={setCountBuy}
          />
        )}
        <article>
          <img
            className="relative top-0 hover:translate-y-4 duration-150 ease-in"
            width={"100%"}
            src={`${props.product.images}`}
            alt="product"
          />

          <h1 className="font-medium text-[20px]">{props.product.title}</h1>
          <p className="text-[13px] text-gray-500">
            {props.product.description.length > 120
              ? props.product.description.slice(0, 120) + "..."
              : props.product.description}
          </p>
        </article>

        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">{props.product.price} ₽</h1>
          {countBuy > 0 && (
            <div className="bg-gray-100 flex gap-2 items-center rounded-3xl">
              <button
                onClick={(e) => handleClickRemove(e)}
                className=" relative rounded-3xl py-2 px-4 hover:text-gray-800  duration-150 text-gray-600 font-bold"
              >
                -
              </button>
              <span>{countBuy}</span>
              <button
                onClick={(e) => handleClickBuy(e)}
                className=" relative rounded-3xl py-2 px-4 hover:text-gray-800 duration-150 text-gray-600 font-bold"
              >
                +
              </button>
            </div>
          )}
          {countBuy === 0 && (
            <button
              onClick={(e) => handleClickBuy(e)}
              className="bg-[#ffb02038] relative rounded-3xl py-2 px-4 hover:bg-[#ffb02070] duration-150 text-orange-500"
            >
              В корзину{" "}
              {countBuy > 0 && (
                <span className="absolute right-[-10px] top-[-10px] bg-[#fb3434ce] rounded-full px-2 font-bold text-white">
                  {countBuy}
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
