import React, { useState } from "react";
import All from "./All";
import Set from "./Set";
import Heading from "./Heading";

function Market() {
  return (
    <div className=" pt-8 bg-gradient-to-tr from-[#75e4e9] to-[#fcebe3]">
      <Set />
      <Heading />
      <All />
    </div>
  );
}

export default Market;
