import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./ProductPage";
import CancelIcon from "@mui/icons-material/Cancel";
import CardItem from "./CardItem";
import store from "./store";

function Cart(props) {
  const { cartItem, setCartItem } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  function crossClick() {
    props.onClick(!props.status);
  }
  return (
    <div
      style={{ display: props.status ? "block" : "none" }}
      className=" z-10  rounded-tl-lg right-0 fixed bg-white  shadow-2xl h-screen w-[450px]"
    >
      <h1 onClick={crossClick} className=" cursor-pointer mb-8 pt-2 pl-3">
        <CancelIcon />
      </h1>
      <h1 className="  text-center text-4xl pb-10">My Cart</h1>
      <div className=" overflow-scroll overflow-x-hidden h-[510px] ">
        <CardItem item={store[props.id]} />
      </div>

      <div className=" fixed bg-white pt-3  bottom-0 pb-8  flex-col w-[450px] flex justify-center">
        <h1 className=" text-center text-2xl pb-3">
          Total amount <span className=" ml-8">${totalPrice}</span>
        </h1>
        <button className=" rounded-lg  w-[80%] text-center m-auto border-2 bg-blue-700 text-white  font-bold text-xl hover:bg-black hover:text-white  pt-2 pb-1">
          checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
