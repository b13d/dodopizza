"use client";

import React, { useState } from "react";
import ListItem from "../listItem/listItem";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function StoriesList() {
  const [moveTo, setMoveTo] = useState(0);

  const handleClickRight = () => {
    if (moveTo > -292) {
      setMoveTo((value) => value - 400);
    }
  };

  const handleClickLeft = () => {
    if (moveTo < 0) {
      setMoveTo((value) => value + 400);
    }
  };

  return (
    <>
      <div className="max-lg:hidden max-w-[1280px] w-full  m-auto relative">
        <div className="w-full m-auto relative max-w-[1100px] overflow-hidden">
          <div className="flex justify-between">
            <section
              style={{ translate: `${moveTo}px` }}
              className={` m-auto flex pt-3 relative gap-3 flex-nowrap duration-300 ease-in-out`}
            >
              <ListItem storiesID={1} />
              <ListItem storiesID={2} />
              <ListItem storiesID={3} />
              <ListItem storiesID={4} />
              <ListItem storiesID={5} />
              <ListItem storiesID={6} />
              <ListItem storiesID={1} />
            </section>
          </div>
        </div>
        <div className="flex">
          {moveTo === 0 && (
            <div
              onClick={handleClickRight}
              className=" font-bold  text-orange-600  absolute top-[50%] right-[2%] text-4xl flex  items-center  cursor-pointer hover:scale-110 duration-150"
            >
              <MdOutlineArrowForwardIos />
            </div>
          )}

          {moveTo !== 0 && (
            <div
              onClick={handleClickLeft}
              className=" font-bold  text-orange-600  absolute top-[50%] left-[2%]  rotate-180 text-4xl flex  items-center  cursor-pointer hover:scale-110 duration-150"
            >
              <MdOutlineArrowForwardIos />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
