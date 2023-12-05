import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { IProduct } from "../../../interfaces";
import {
  productAdd,
  productDelete,
} from "../../features/products/productsSlice";
import { decrement, increment } from "../../features/counter/counterSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function TemporaryDrawer() {
  const count = useAppSelector((state) => state.counter);
  const products = useAppSelector((state) => state.products.products);

  const currentId = useAppSelector((state) => state.products.id);

  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setOpen(open);

      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
    };

  console.log(count.countPrice);
  console.log(count.countProducts);

  const handleClickBuy = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: IProduct
  ) => {
    console.log(products);

    const newProduct: IProduct = {
      id: currentId,
      description: product.description,
      images: product.images,
      title: product.title,
      oldPrice: 0,
      price: Number(product.price),
      idName: product.idName,
      basketCount: product.basketCount,
      type: product.type,
    };

    console.log(newProduct);

    dispatch(productAdd(newProduct));

    event.stopPropagation();
    dispatch(increment(product.price));
  };

  const handleClickRemove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: IProduct
  ) => {
    dispatch(productDelete(product));

    event.stopPropagation();

    dispatch(decrement(product.price));
  };

  const list = () => (
    <Box
      sx={{
        width: 400,
        height: "100vh",
        position: "relative",
        backgroundColor: "#ededed",
      }}
      // role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {products.length > 0 && (
        <section className="overflow-x-hidden h-screen flex flex-col">
          <div className="p-4">
            <Typography
              sx={{ textAlign: "start" }}
              color={"InfoText"}
              variant="h6"
            >
              {count.countProducts} товара на {count.countPrice} ₽
            </Typography>
          </div>
          <section className="overflow-scroll overflow-x-hidden flex flex-col w-full bg-[#ededed]">
            {products.map((product, index) => (
              <div className="px-4 text-black bg-white mb-2 hover:bg-gray-50 duration-200">
                <div className="flex items-start" key={product.id}>
                  <div className="w-full gap-4 flex items-center ">
                    <div>
                      <img
                        src={product.images[0]}
                        className="w-[100px] h-[80px]"
                        alt="product"
                      />
                    </div>
                    <div className="w-full flex flex-col">
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "16px",
                        }}
                        variant="h6"
                      >
                        {product.title}
                        <ClearIcon
                          className="hover:text-red-600 duration-300"
                          sx={{
                            transition: "none",
                          }}
                        />
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "start",
                          fontSize: "12px",
                          color: "gray",
                        }}
                        variant="body1"
                      >
                        160г.
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <hr />
                  {/* <Divider /> */}
                  <div className="py-4 flex justify-between items-center">
                    <Typography sx={{ fontSize: "16px" }} variant="h6">
                      {product.price * product.basketCount} ₽
                    </Typography>

                    {count.countProducts > 0 && (
                      <div className="bg-gray-100 flex gap-2 items-center rounded-3xl">
                        <button
                          onClick={(e) => handleClickRemove(e, product)}
                          className=" relative rounded-3xl py-2 px-4 hover:text-gray-800  duration-150 text-gray-600 font-bold"
                        >
                          -
                        </button>
                        <span>{product.basketCount}</span>
                        <button
                          onClick={(e) => handleClickBuy(e, product)}
                          className=" relative rounded-3xl py-2 px-4 hover:text-gray-800 duration-150 text-gray-600 font-bold"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>
          <div className="bg-white h-[20%] flex flex-col gap-4 w-full text-black px-8 py-4 mt-auto">
            <div className="flex justify-between items-center">
              <p>{count.countProducts} товаров</p>
              <p>{count.countPrice} ₽</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h2>Сумма заказа</h2>
              <p>{count.countPrice} ₽</p>
            </div>

            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                py: "8px",
              }}
              color="warning"
            >
              К оформлению заказа
              <ArrowForwardIosIcon sx={{ position: "absolute", right: 10 }} />
            </Button>
          </div>
        </section>
      )}

      {products.length === 0 && (
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-black text-3xl">Корзина пуста</h1>
        </div>
      )}
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{ color: "white" }} onClick={toggleDrawer(true)}>
            Корзина | {count.countProducts}
          </Button>
          {open && (
            <section className="flex p-0 m-0">
              <div
                onClick={toggleDrawer(false)}
                className=" bg-[#000000cc] min-h-screen w-full z-10 fixed left-0 top-0"
              ></div>
              <div className="fixed z-20 right-0 top-0">{list()}</div>
            </section>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
