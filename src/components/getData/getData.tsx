import React from "react";
import axios from "axios";

interface User {}

interface Orders {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  images: [];
}

export default async function GetData(props: { namePosition: string }) {
  const api = `http://localhost:3004/${props.namePosition}`;

  const data = (await axios.get(api)).data;

  return data;

  // await axios.post(apiUsers, newUser);

  // axios.delete(`${apiUsers}/${params}`);
}
