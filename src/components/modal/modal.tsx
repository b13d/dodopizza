"use client";

import React, { useState } from "react";
import { Modal, Button, Box, Typography, Backdrop, Fade } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment, decrement } from "../../features/counter/counterSlice";
import {
  productAdd,
  productDelete,
} from "../../features/products/productsSlice";
import { IFrequentlyOrdered } from "../../../interfaces";

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
  open: boolean;
  title: string;
  description: string;
  src: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  price: string;
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

  const handleClickBuy = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const image = [props.src];

    const newProduct: IFrequentlyOrdered = {
      id: currentId,
      description: props.description,
      images: image,
      name: props.title,
      oldPrice: 0,
      price: Number(props.price),
    };

    console.log(newProduct);

    dispatch(productAdd(newProduct));

    props.setCountBuy((value) => value + 1);
    event.stopPropagation();

    setOpen(false);
    dispatch(increment(Number(props.price)));

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
          <Box width={props.description === undefined ? 400 : 600} sx={style}>
            <section className={`flex gap-7`}>
              <div className="w-[70%] flex flex-col items-center">
                <img
                  className="m-auto"
                  width={200}
                  height={200}
                  alt="eat"
                  src={props.src}
                />
              </div>

              <div
                className={`w-[100%] flex flex-col ${
                  props.description ? "justify-between" : "justify-end"
                }   items-end`}
              >
                {props.description && (
                  <>
                    <div>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {props.title}
                      </Typography>
                      <p className="text-gray-500 text-sm">1 шт</p>
                      <Typography id="modal-modal-description" variant="body2">
                        {props.description}
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
                  Добавить в корзину за {props.price}
                </Button>
              </div>
            </section>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
