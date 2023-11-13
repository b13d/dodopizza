import React from "react";
import ListItem from "../listItem/page";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function StoriesList() {
  return (
    <section className="w-[1280px] m-auto flex justify-between gap-5 pt-3 relative">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <h1 className="font-bold text-orange-600 text-4xl absolute flex items-center top-[45%] right-[-50px] cursor-pointer hover:scale-110 duration-150">
        <MdOutlineArrowForwardIos />
      </h1>
    </section>
  );
}
