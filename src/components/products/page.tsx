import React from "react";
import Product from "../product/page";
import axios from "axios";
import { IProduct, IProducts } from "../../../interfaces";

export default async function Products() {
  const api = `http://localhost:3004/Products`;

  const arrPoducts = (await axios.get(api)).data;

  return (
    <section className="w-[1280px] m-auto">
      {arrPoducts.map((product) => {
        return (
          <>
            <h1 className="text-3xl font-semibold my-4">{product[0].type}</h1>

            <div
              key={product[0].type}
              className="grid items-start grid-cols-4 gap-20 mb-5"
            >
              <Product product={product[0]} />
              <Product product={product[1]} />
              <Product product={product[2]} />
            </div>
          </>
        );
        // console.log(product);
      })}
    </section>
  );
}

{
  /* {arrPoducts.map((product) => {
        return (
          <h1 className="p-4 font-bold text-3xl">Название продуктов</h1>

          <div className="grid grid-cols-4 gap-8">
            <Product product={product} />
          </div>
        )
      })} */
}
