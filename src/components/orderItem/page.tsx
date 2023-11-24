"use client";

import React, { useState } from "react";
import ModalWindow from "../modal/page";

import { IFrequentlyOrdered } from "../../../interfaces";

export default function OrderItem(props: { order: IFrequentlyOrdered }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <ModalWindow
          open={showModal}
          title={props.order.name}
          src={props.order.images[0]}
          setShowModal={setShowModal}
          price={props.order.price.toString() + " ₽"}
        />
      )}
      <div
        onClick={handleOpen}
        className="flex mr-6 w-[260px] gap-4 items-center py-4 px-4 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.1)] rounded-md h-[100px] hover:shadow-md duration-150 cursor-pointer"
      >
        <img width={80} src={props.order.images[0]} alt="icon" />

        <div>
          <p>{props.order.name}</p>
          <p>{props.order.price} ₽</p>
          {props.order.oldPrice !== 0 && (
            <p>
              <s className="text-red-400">{props.order.oldPrice} ₽</s>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
