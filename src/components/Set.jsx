import React, { useState } from "react";
import Cart from "./Cart";
import Categories from "./Categories";

function Set() {
  const [click, setClick] = useState(false);
  function clicked(clk) {
    setClick(clk);
  }
  function crossClick(cClick) {
    setClick(cClick);
  }
  return (
    <div>
      <Cart onClick={crossClick} status={click} />
      <Categories onClick={clicked} />
    </div>
  );
}

export default Set;
