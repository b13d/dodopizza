"use client";

import React, { useState } from "react";
import { Modal, Button, Box, Typography } from "@mui/material";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#f9f9f9",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

export default function ModalWindow(props: {
  open: boolean;
  title: string;
  description?: string;
  src: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  price: string;
}) {
  console.log(props.open);

  const [open, setOpen] = useState(props.open);
  const handleClose = () => {
    console.log("handleClose");
    props.setShowModal(false);
  };

  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <section className="flex">
            <div className="w-[100%] flex flex-col items-center">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.title}
              </Typography>
              <Image
                className="m-auto"
                width={200}
                height={200}
                alt="eat"
                src={props.src}
              />
              <Typography
                className="text-center"
                variant="h6"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                {props.price}
              </Typography>
            </div>

            <div className="w-[100%] flex flex-col justify-between items-end">
              {props.description && (
                <>
                  <div>
                    <Typography variant="h6">Описание</Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {props.description}
                    </Typography>
                  </div>
                </>
              )}

              <Button
                style={{ marginTop: "40px" }}
                variant="contained"
                color="warning"
              >
                В корзину
              </Button>
            </div>
          </section>
        </Box>
      </Modal>
    </>
  );
}
