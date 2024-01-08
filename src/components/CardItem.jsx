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

  function handleQty(event) {
    setQuantity(event.target.value);
  }

  return (
    <>
      {cartItem.map((item, id) => (
        <div className="  relative flex   border-b-2 items-start">
          <img
            className=" rounded-md   ml-2 mt-[20px] h-28 w-28"
            src={item.img2}
            alt=""
          />
          <div className=" grid grid-cols-3 mt-5 grid-rows-4  w-96 h-32  content-center  m-2 ">
            <h1 className="  col-span-2  text-md">{item.title}</h1>
            <h1 className=" row-span-3    text-xl">
              ${calcPrice(quantity, item.price)}
            </h1>
            <p className=" col-span-2 row-span-2 text-gray-600">
              Lorem, ipsum.
            </p>

            <label className=" cursor-pointer relative col-span-2 text-gray-600">
              Qty{" "}
              <input
                className="  w-7"
                type="text"
                onChange={handleQty}
                defaultValue={quantity}
              />
            </label>
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
