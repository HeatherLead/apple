import React from "react";
import store from "./store";
import { Link } from "react-router-dom";

function Trending() {
  return (
    <div className=" pt-32">
      <h1 className=" ml-10 lg:ml-20 mb-4 text-5xl">Trending</h1>
      <div className=" mx-auto grid justify-items-stretch place-content-center gap-2 p-10 lg:p-20 lg:pt-0 grid-cols-7">
        <Link
          to="/market/all/product/19"
          className="  cursor-pointer col-span-3 row-span-3"
        >
          <img src={store[19].img4} alt="" />
        </Link>
        <span className="col-span-2  row-span-1"></span>
        <Link
          to="/market/all/product/9"
          className=" cursor-pointer col-span-2 "
        >
          <img src={store[9].img4} alt="" />
        </Link>
        <Link
          to="/market/all/product/1"
          className=" cursor-pointer col-span-2 "
        >
          <img src={store[1].img} alt="" />
        </Link>
        <Link
          to="/market/all/product/15"
          className=" cursor-pointer col-span-2"
        >
          <img src={store[15].img} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Trending;
