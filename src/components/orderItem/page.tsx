import React from "react";

import { IFrequentlyOrdered } from "../../../interfaces";

export default function OrderItem(props: { order: IFrequentlyOrdered }) {
  return (
    <div className="flex mr-6 w-[260px] gap-4 items-center py-4 px-4 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.1)] rounded-md h-[100px] hover:shadow-md duration-150 cursor-pointer">
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
  );
}
