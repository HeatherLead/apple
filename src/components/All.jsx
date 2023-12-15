import React from "react";
import store from "./store";
import StaticCard from "./StaticCard";

function All() {
  return (
    <div className="   flex justify-around  flex-wrap pt-24">
      {store.map((data, index) => {
        return (
          <StaticCard
            key={index}
            id={data.id}
            title={data.title}
            price={data.price}
            img={data.img}
          />
        );
      })}
    </div>
  );
}

export default All;
