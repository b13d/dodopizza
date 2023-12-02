import React, { useEffect, useState } from "react";
import Product from "../product/product";
import axios from "axios";
import { IProduct, IProducts } from "../../../interfaces";

export default function Products() {
  const [products, setProducts] = useState([]);
  const api = `http://localhost:3004/Products`;

  useEffect(() => {
    const handleGetData = async () => {
      const arrPoducts = (await axios.get(api)).data;

      setProducts(arrPoducts);
    };
    handleGetData();
  }, []);

  return (
    <section className="w-[1280px] m-auto">
      {products.map((product: IProduct[]) => {
        return (
          <div id={product[0].idName} key={product[0].type}>
            <h1 className="text-3xl font-semibold my-4">{product[0].type}</h1>

            <div className="grid items-start grid-cols-3 gap-20 mb-5">
              <Product product={product[0]} />
              <Product product={product[1]} />
              <Product product={product[2]} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
