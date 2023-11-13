import React from "react";
import OrderItem from "../orderItem/page";
import GetData from "../getData/page";
import axios from "axios";

import { IFrequentlyOrdered } from "../../../interfaces";

export default async function Orders() {
  const data: IFrequentlyOrdered[] = await getOrders();

  // console.log(data);

  return (
    <section className="m-auto w-full flex justify-center">
      <div className="w-[1280px]">
        <h1 className="my-4 text-2xl font-semibold">Часто заказывают</h1>
        <div className="flex">
          {data.map((order) => {
            return <OrderItem key={order.id} order={order} />;
          })}
          {/* 
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem /> */}
        </div>
      </div>
    </section>
  );
}

async function getOrders() {
  const api = `http://localhost:3004/frequentlyOrdered`;

  const data = (await axios.get(api)).data;

  return data;
}
