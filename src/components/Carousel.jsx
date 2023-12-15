import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function Carousel(props) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === 2 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? 2 : slide - 1);
  };
  return (
    <div className="h-[500px] w-[500px] relative  flex justify-center items-center">
      <ArrowBackIosIcon
        onClick={prevSlide}
        className="  drop-shadow-xl absolute left-4 cursor-pointer"
      />
      <img
        className={
          slide === 0 ? "shadow-lg rounded-lg  h-[480px] w-[480px]" : "  hidden"
        }
        src={props.img1}
        alt=""
      />
      <img
        className={
          slide === 1 ? "shadow-lg rounded-lg  h-[480px] w-[480px]" : "  hidden"
        }
        src={props.img2}
        alt=""
      />
      <img
        className={
          slide === 2 ? "shadow-lg rounded-lg  h-[480px] w-[480px]" : "  hidden"
        }
        src={props.img3}
        alt=""
      />
      <ArrowForwardIosIcon
        onClick={nextSlide}
        className=" absolute right-3 cursor-pointer "
      />
    </div>
  );
}

export default Carousel;
