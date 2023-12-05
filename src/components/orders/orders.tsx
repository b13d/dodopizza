import React, { useEffect, useState } from "react";
import OrderItem from "../orderItem/orderItem";
import axios from "axios";

import { IProduct } from "../../../interfaces";

export default function Orders() {
  const [data, setData] = useState<IProduct[]>([]);

  // console.log(data);

  useEffect(() => {
    const handleGetData = async () => {
      const data: IProduct[] = await getOrders();

      console.log(data);

      setData(data);
    };
    handleGetData();
  }, []);

  return (
    <section className="max-md: m-auto w-full flex justify-center">
      <div className="max-w-[1280px] w-full">
        <h1 className="px-4 my-4 text-2xl font-semibold">Часто заказывают</h1>
        <div className="max-lg:flex-wrap max-lg:justify-center flex gap-2">
          {data.map((order) => {
            return <OrderItem key={order.id} order={order} />;
          })}
        </div>
      </div>
    </section>
  );
}

async function getOrders() {
  console.log();

  const api = `http://localhost:3004/frequentlyOrdered`;

  const data = (await axios.get(api)).data;

  console.log(data);

  return data;
}
