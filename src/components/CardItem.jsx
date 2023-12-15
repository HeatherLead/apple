import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "./ProductPage";

function CardItem() {
  const [quantity, setQuantity] = useState(1);
  const { cartItem, setCartItem } = useContext(CartContext);

  const calcPrice = (quantity, item) => {
    return quantity * item;
  };
  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeFromCart = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };
  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);

  return (
    <>
      {cartItem.map((item, id) => (
        <div className="  relative flex   border-b-2 items-start pb-5">
          <img
            className=" rounded-md   ml-2 mt-[20px] h-28 w-28"
            src={item.img2}
            alt=""
          />
          <div className=" grid grid-cols-2 grid-rows-4 gap-x-12  content-center  m-2 ">
            <h1 className=" text-md">{item.title}</h1>
            <h1 className="   text-xl">${calcPrice(quantity, item.price)}</h1>
            <p className=" text-gray-600">Lorem, ipsum.</p>
            <p></p>
            <p></p>
            <p></p>
            <a className=" text-gray-600" href="">
              {quantity}
            </a>
            <a
              onClick={() => removeFromCart(item.id)}
              className=" cursor-pointer text-[#4F46E5]"
            >
              remove
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardItem;
