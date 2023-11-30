import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import { useAppDispatch, useAppSelector } from "./hooks";
import { increment, decrement } from "./features/counter/counterSlice";
import Second from "./Second";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Delivery from "./components/delivery/delivery";
import Orders from "./components/orders/orders";
import Products from "./components/products/products";
import StoriesList from "./components/storiesList/storiesList";
import Nav from "./components/nav/nav";
import TemporaryDrawer from "./components/basket/basket";

function App() {
  // const [count, setCount] = useState(0);
  // const count = useAppSelector((state) => state.counter.value);
  // const dispatch = useAppDispatch();

  return (
    <>
      <Header />
      <Nav />
      {/* <TemporaryDrawer /> */}
      <StoriesList />
      <Orders />
      <Products />
      <Delivery />
      <Footer />
    </>
  );
}

export default App;
