import React from "react";
import store from "./store";
import Set from "./Set";
import StaticCard from "./StaticCard";
import Heading from "./Heading";

function Iphones() {
  return (
    <div className=" pt-8 bg-gradient-to-tr from-[#75e4e9] to-[#fcebe3]">
      <Set />
      <Heading />
      <div className="   flex justify-around  flex-wrap pt-24">
        {store
          .filter((stire) => stire.category == "iphone")
          .map((filteredCat, index) => (
            <StaticCard
              key={index}
              id={filteredCat.id}
              price={filteredCat.price}
              title={filteredCat.title}
              img={filteredCat.img}
            />
          ))}
      </div>
    </div>
  );
}

export default Iphones;
