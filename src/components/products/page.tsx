import React from "react";
import Product from "../product/page";
import axios from "axios";
import { IProduct, IProducts } from "../../../interfaces";

export default async function Products() {
  const api = `http://localhost:3004/Products`;

  const arrPoducts = (await axios.get(api)).data;

  console.log(arrPoducts["breakfast"]);

  debugger;

  return (
    <section className="w-[1280px] m-auto">
      <h1 className="p-4 font-bold text-3xl">Название продуктов</h1>

      <div className="grid grid-cols-4 gap-8">
        {/* {arrPoducts.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })} */}
        {/* {arrPoducts.map((productSection) => {
          productSection.map((product) => {
          });
        })} */}
      </div>
    </section>
  );
}
