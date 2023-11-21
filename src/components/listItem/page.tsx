import React from "react";

export default function ListItem(props: { storiesID: number }) {
  return (
    <div className="cursor-pointer duration-200 border-[3px] border-orange-500 w-[203px] h-[254px] rounded-2xl overflow-hidden">
      <img
        className="hover:scale-110 duration-200 p-1 rounded-2xl w-full h-full"
        src={`/images/stories/stories-${props.storiesID}.png`}
        alt="listItem"
      />
    </div>
  );
}
