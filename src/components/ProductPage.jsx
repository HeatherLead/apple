import React, { useState, useContext, createContext } from "react";
import Set from "./Set";
import Carousel from "./Carousel";
import store from "./store";
import { useParams } from "react-router-dom";
import Trending from "./Trending";

export const CartContext = createContext();

function ProductPage(props) {
  const { id } = useParams();
  const [data, setData] = useState(store[id]);
  const [qty, setQty] = useState(1);

  const { addToCart } = useContext(CartContext);

  function handlePrice(qty) {
    return qty * store[id].price;
  }
  return (
    <div className="">
      <Set />
      <div className=" mt-14 flex flex-wrap items-center justify-around">
        <Carousel
          img1={store[id].img2}
          img2={store[id].img3}
          img3={store[id].img4}
        />
        <div className=" flex shadow-xl bg-[#e5e5e5] flex-col h-[480px] w-[480px] justify-around">
          <h1 className="  font-bold  text-center text-4xl">
            {store[id].title}
          </h1>
          <p className="pl-2 pr-2 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, sint
            possimus laborum ipsam labore, minima debitis fugit repellendus nisi
            perferendis, porro nihil officia? Fuga, deleniti.
          </p>
          <h1 className="flex justify-around">
            <span className=" font-bold text-3xl">Quantity</span>
            <span className=" select-none">
              <span
                onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}
                className="  text-center text-2xl cursor-pointer border-black font-bold border-2 pr-[19px] pl-[19px] pt-2 pb-2"
              >
                -
              </span>
              <span className=" text-center text-2xl cursor-pointer border-black border-r-0 border-l-0 font-bold border-2 p-4 pt-2 pb-2">
                {qty}
              </span>
              <span
                onClick={() => {
                  if (qty >= 1) {
                    setQty(qty + 1);
                  }
                }}
                className=" z-10 text-center text-2xl cursor-pointer border-black  font-bold border-2 p-4 pt-2 pb-2"
              >
                +
              </span>
            </span>
            <span className="font-bold text-3xl">${handlePrice(qty)}</span>
          </h1>
          <div className="flex justify-around">
            <button
              onClick={() => {
                data.cQty = qty;
                addToCart(data);
              }}
              className=" border-2 border-black text-2xl hover:shadow-2xl font-bold pt-3 pb-2 pl-5 pr-5"
            >
              Add To Cart
            </button>
            <button className="  text-white bg-red-700 hover:shadow-2xl  text-2xl font-bold p2-3 pb-1 pl-5 pr-5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Trending />
    </div>
  );
}

export default ProductPage;
