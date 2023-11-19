"use client";

import React, { useState } from "react";
import ListItem from "../listItem/page";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function StoriesList() {
  const [moveTo, setMoveTo] = useState(0);

  const handleClickRight = () => {
    if (moveTo > -292) {
      setMoveTo((value) => value - 292);
    }
  };

  const handleClickLeft = () => {
    if (moveTo < 0) {
      setMoveTo((value) => value + 292);
    }
  };

  return (
    <>
      <div className="w-[1280px] m-auto relative">
        <div className="w-[1280px] m-auto relative overflow-hidden">
          <div className="flex justify-between">
            <section
              style={{ translate: `${moveTo}px` }}
              className={`w-[1280px] m-auto flex pt-3 relative gap-3 flex-nowrap duration-150 ease-linear`}
            >
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </section>
          </div>
        </div>
        <div className="flex">
          <div
            onClick={handleClickRight}
            className=" font-bold  text-orange-600  absolute top-[50%] right-[-5%] text-4xl flex  items-center  cursor-pointer hover:scale-110 duration-150"
          >
            <MdOutlineArrowForwardIos />
          </div>

          <div
            onClick={handleClickLeft}
            className=" font-bold  text-orange-600  absolute top-[50%] left-[-5%]  rotate-180 text-4xl flex  items-center  cursor-pointer hover:scale-110 duration-150"
          >
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
    </>
  );
}
