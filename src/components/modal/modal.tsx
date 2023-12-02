"use client";

import React, { useState } from "react";
import { Modal, Button, Box, Typography, Backdrop, Fade } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment, decrement } from "../../features/counter/counterSlice";
import {
  productAdd,
  productDelete,
} from "../../features/products/productsSlice";
import { IProduct } from "../../../interfaces";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#f9f9f9",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

export default function ModalWindow(props: {
  product: IProduct;
  open: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCountBuy: React.Dispatch<React.SetStateAction<number>>;
}) {
  console.log(props.open);

  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(props.open);
  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);

    setTimeout(() => {
      props.setShowModal(false);
    }, 700);
  };
  const currentId = useAppSelector((state) => state.products.id);
  const products = useAppSelector((state) => state.products);

  const handleClickBuy = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const image = props.product.images;

    console.log(products);

    const newProduct: IProduct = {
      id: currentId,
      idName: props.product.idName,
      description: props.product.description,
      type: props.product.type,
      basketCount: props.product.basketCount,
      images: image,
      title: props.product.title,
      oldPrice: 0,
      // price: Number(props.product.price.split(" ")[0]),
      price: props.product.price,
    };

    console.log(newProduct);

    dispatch(productAdd(newProduct));

    props.setCountBuy((value) => value + 1);
    event.stopPropagation();

    setOpen(false);
    // dispatch(increment(Number(props.price.split(" ")[0])));
    dispatch(increment(props.product.price));

    setTimeout(() => {
      props.setShowModal(false);
    }, 700);
  };

  return (
    <>
      <Modal
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box
            width={props.product.description === undefined ? 400 : 600}
            sx={style}
          >
            <section className={`flex gap-7`}>
              <div className="w-[70%] flex flex-col items-center">
                <img
                  className="m-auto"
                  width={200}
                  height={200}
                  alt="eat"
                  src={props.product.images[0]}
                />
              </div>

              <div
                className={`w-[100%] flex flex-col ${
                  props.product.description ? "justify-between" : "justify-end"
                }   items-end`}
              >
                {props.product.description && (
                  <>
                    <div>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {props.product.title}
                      </Typography>
                      <p className="text-gray-500 text-sm">1 шт</p>
                      <Typography id="modal-modal-description" variant="body2">
                        {props.product.description}
                      </Typography>
                    </div>
                  </>
                )}

                <Button
                  onClick={(e) => handleClickBuy(e)}
                  style={{
                    marginTop: "40px",
                    borderRadius: "20px",
                    padding: "8px 10px",
                    backgroundColor: "#ff6900",
                  }}
                  variant="contained"
                >
                  Добавить в корзину за {props.product.price}
                </Button>
              </div>
            </section>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
