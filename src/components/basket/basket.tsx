import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { IProduct } from "../../../interfaces";
import {
  productAdd,
  productDelete,
} from "../../features/products/productsSlice";
import { decrement, increment } from "../../features/counter/counterSlice";

export default function TemporaryDrawer() {
  const count = useAppSelector((state) => state.counter);
  const products = useAppSelector((state) => state.products.products);

  const currentId = useAppSelector((state) => state.products.id);

  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

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
      sx={{ width: 400, backgroundColor: "#ededed" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="p-4">
        <Typography variant="h6">
          {count.countProducts} товара на {count.countPrice} ₽
        </Typography>
        {/* <Typography sx={{ color: "gray", fontSize: "12px" }} variant="body1">
          До минимальной суммы на доставку — 102 ₽
        </Typography> */}
      </div>

      <List className="flex flex-col px-4 gap-2">
        {products.map((product, index) => (
          <div className="bg-white">
            <ListItem
              className="flex items-start"
              key={product.id}
              disablePadding
            >
              <ListItemButton
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <img
                    src={product.images[0]}
                    className="w-[80px] h-[80px]"
                    alt="product"
                  />
                </ListItemIcon>
                <div className="w-full flex flex-col ">
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
                    sx={{ fontSize: "12px", color: "gray" }}
                    variant="body1"
                  >
                    160г.
                  </Typography>
                </div>
              </ListItemButton>
            </ListItem>
            <div className="px-4">
              <Divider />
              <div className="py-4 flex justify-between">
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
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{ color: "white" }} onClick={toggleDrawer(true)}>
            Корзина | {count.countProducts}
          </Button>
          <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
