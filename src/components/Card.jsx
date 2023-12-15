import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const [mouse, setMouse] = useState(false);
  function MouseEnter() {
    setMouse(true);
  }
  function mouseLeave() {
    setMouse(false);
  }
  return (
    <Link to={`/market/${props.id}`}>
      <div
        onMouseEnter={MouseEnter}
        onMouseLeave={mouseLeave}
        style={{
          width: mouse ? "250px" : "240px",
          height: mouse ? "300px" : "290px",
        }}
        className="card rounded-tr-[40px] rounded-bl-[40px] ml-5 mr-5 mb-10 bg-white p-4 w-60"
      >
        <img className=" rounded-tr-3xl w-56" src={props.img} alt="" />
        <h1 className=" text-center">
          <a
            className="  text-center text-2xl mt- font-bold text-black"
            href=""
          >
            {props.title}
          </a>
        </h1>
        <p className=" text-center text-black text-md">{props.des}</p>
      </div>
    </Link>
  );
}

export default Card;
