import React, { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { cyan } from "@mui/material/colors";
import airpods from "../images/airpods.png";
import iphone from "../images/iphone.jpg";
import Card from "./Card";
import charging from "../images/charging.jpg";
import container1 from "./container1";
import container2 from "./container2";
import { Link } from "react-router-dom";
function LandingPage() {
  const [click, setClick] = useState(false);
  const [btnValue, setBtnValue] = useState("Show More");
  function clicked() {
    setClick(!click);
    if (click) {
      setBtnValue("Show More");
    } else if (click == false) {
      setBtnValue("Show Less");
    }
  }

  function createCard(container1) {
    return (
      <Card
        key={container1.id}
        img={container1.img}
        title={container1.title}
        des={container1.des}
      />
    );
  }

  return (
    <div>
      <div className="first h-screen bg-gradient-to-tr from-[#75e4e9] to-[#fcebe3]">
        <div className="flex ml-4 pt-6">
          <AppleIcon fontSize="large" sx={{ color: cyan[300] }} />
          <h1 className=" m-1 mb-0 text-2xl text-white font-bold font-serif">
            Apple
          </h1>
        </div>
        <div className="flex  justify-around  flex-wrap-reverse  align-middle">
          <div className=" flex justify-center  flex-col">
            <h1 className=" text-white p-2 text-5xl">The Brand New</h1>
            <h1 className=" font-bold text-white p-2 text-7xl">Airpod Max</h1>
            <div>
              <button className="btn m-2 pt-2 pb-2 pl-5 mr-4 rounded-3xl hover:shadow-md hover:bg-black hover:text-white bg-white font-bold pr-5">
                <Link to="/market/all/product/6">Buy Now</Link>
              </button>
              <button className="btn m-2 pt-2 pb-2 pl-5 mr-4 font-bold hover:shadow-xl bg-white bg-opacity-30 rounded-3xl pr-5">
                <Link to="/market/all">Shop All</Link>
              </button>
            </div>
          </div>

          <img className="" src={airpods} alt="airpods" />
        </div>
      </div>
      <div className="flex justify-around  pt-24 lg:pt-0 pb-24  flex-wrap-reverse bg-gradient-to-br from-[#75e4e9] to-[#fcebe3]">
        <div className=" flex flex-col    justify-center lg:w-1/2">
          <h1 className=" ml-8   text-5xl text-white">All new Technology</h1>
          <p className="  ml-8 mr-8 mt-8 text-white text-xl lg:w-[75%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quis consequatur repellat neque? Id modi molestiae distinctio quae
            saepe blanditiis!
          </p>
        </div>
        <img
          className=" mb-6  rounded-tr-[80px] w-96 h-96"
          src={iphone}
          alt="iphone"
        />
      </div>
      <div className=" bg-gradient-to-tr from-[#75e4e9] to-[#fcebe3] ">
        <h1 className=" text-center pt-10 text-white text-4xl">
          Shop by Category
        </h1>
        <div className="container1 flex justify-around flex-wrap mt-40">
          {container1.map((container1, index) => {
            return (
              <Card
                key={index}
                id={container1.id}
                img={container1.img}
                title={container1.title}
                des={container1.des}
              />
            );
          })}
        </div>
        <div
          style={{ display: click ? "flex" : "none" }}
          className="container1 flex justify-around flex-wrap "
        >
          {container2.map((container2, index) => {
            return (
              <Card
                key={index}
                id={container2.id}
                img={container2.img}
                title={container2.title}
                des={container2.des}
              />
            );
          })}
        </div>

        <div className=" flex justify-center">
          <button
            onClick={clicked}
            className="btn m-2 mt-5 pt-2 pb-2 pl-5 mr-4 font-bold hover:shadow-lg bg-white bg-opacity-30 rounded-3xl pr-5"
          >
            {btnValue}
          </button>
        </div>
      </div>
      <div className="flex justify-around  pt-24 pb-24  flex-wrap-reverse bg-gradient-to-br from-[#75e4e9] to-[#fcebe3]">
        <div className=" flex flex-col    justify-start lg:w-1/2">
          <h1 className=" ml-8   text-5xl text-white">Excited to Buy</h1>
          <p className="  m-8 text-white text-xl lg:w-[75%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quis consequatur ajdoebs woeerdgdwd
          </p>
          <p className="m-8 mb-16  mt-0 text-white text-xl lg:w-[75%]">
            Visit us in Store!
          </p>
          <h1 className=" text-white text-2xl mb-6 ml-8">OUR LOCATION</h1>
          <p className="text-white ml-8">Apple BKC</p>
          <p className="text-white ml-8">jio world drive , mumbai</p>
          <p className="text-white ml-8">(123) 456 789</p>
        </div>
        <img
          className=" mb-6  rounded-tr-[80px] w-96 h-96"
          src={charging}
          alt="iphone on charging"
        />
      </div>
    </div>
  );
}

export default LandingPage;
