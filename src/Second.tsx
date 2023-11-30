import React from "react";
import { useAppSelector } from "./hooks";

export default function Second() {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <>
      <div>Second component</div>
      <h1 className="text-2xl">{count}</h1>
    </>
  );
}
