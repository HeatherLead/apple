import React from "react";
import Set from "./Set";
import StaticCard from "./StaticCard";
import store from "./store";
import Heading from "./Heading";

function Airpods() {
  return (
    <div className=" pt-8 bg-gradient-to-tr from-[#75e4e9] to-[#fcebe3]">
      <Set />
      <Heading />
      <div className="   flex justify-around  flex-wrap pt-24">
        {store
          .filter((stire) => stire.category == "airpods")
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

export default Airpods;
