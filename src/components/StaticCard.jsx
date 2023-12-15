import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <Link to={`/market/all/product/${props.id}`}>
      <div className="card rounded-[40px]  shadow-2xl ml-5  mr-5 mb-20 cursor-pointer bg-white  border-2 border-black h-[340px]    p-4 w-80 ">
        <img
          className=" rounded-tr-3xl rounded-tl-3xl   "
          src={props.img}
          alt=""
        />
        <h1 className=" mt-8 text-center ">
          <a className="  text-center text-2xl  font-bold text-black" href="">
            {props.title}
          </a>
        </h1>
        <h1 className=" text-center text-xl pt-4">
          Starting at <span className=" font-bold">${props.price}</span>
        </h1>
      </div>
    </Link>
  );
}

export default Card;
