import React from "react";
import slider1 from "../../../assets/Banner/slider1.jpg";
import star from "../../../assets/Banner/stars.png";
function Banner1() {
  return (
    <div className="w-full relative h-screen">
      <img
        src={slider1}
        alt=""
        className="absolute -z-50 object-cover top-0 left-0 w-full h-full"
      />
      <div className="p-20 w-1/2">
        <span className="uppercase block mb-5 text-sm text-black font-semibold">
          the most trusted ayurvedic & organic brand
        </span>
        <h2 className="text-7xl capitalize color-black leading-snug mb-3 font-semibold">
          Say no to health issues, yes to life
        </h2>
        <div className="flex items-center gap-3">
          <img src={star} alt="" />
          <span className="text-lg font-medium">
            over 3 lacs + happy customer
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
