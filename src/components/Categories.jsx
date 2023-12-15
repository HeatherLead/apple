import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AppleIcon from "@mui/icons-material/Apple";
import Cart from "./Cart";

function Categories(props) {
  const [click, setClick] = useState(true);
  function handleClick() {
    setClick(true);
    props.onClick(click);
  }
  return (
    <div className="">
      <ul className="   flex gap-5 pt-2 pb-2 justify-center flex-wrap border-y-2">
        <li className="  cursor-pointer">
          <NavLink to="/">
            <AppleIcon color="disabled" />
          </NavLink>
        </li>
        <li className="  pl-4 pr-4 mr-2 ml-2">
          <NavLink to="/market/all">All</NavLink>
        </li>
        <li className="  pl-4 pr-4 mr-2 ml-2">
          <NavLink to="/market/iphones">iphones</NavLink>
        </li>
        <li className="  pl-4 pr-4 mr-2 ml-2">
          <NavLink to="/market/airpods">Airpods</NavLink>
        </li>
        <li className="  pl-4 pr-4 mr-2 ml-2">
          <NavLink to="/market/mackbooks">Mackbooks</NavLink>
        </li>
        <li className="  pl-4 pr-4 mr-2 ml-2">
          <NavLink to="/market/ipad">Ipad</NavLink>
        </li>
        <li className="  pl-4 pr-4 mr-2 ml-2">
          <NavLink to="/market/mac">Mac</NavLink>
        </li>
        <li className="  pl-4 pr-4 mr-2 ml-2">
          <NavLink to="/market/macDisplay">Mac Display</NavLink>
        </li>
        <li className=" cursor-pointer" onClick={handleClick}>
          <LocalMallIcon color="action" />
        </li>
      </ul>
    </div>
  );
}

export default Categories;
