import React from "react";
import footerImg from "../../assets/footer.webp";
import amazon from "../../assets/Footer Images/amazon.avif";
import flipkart from "../../assets/Footer Images/flipkart.avif";
import jiomart from "../../assets/Footer Images/jiomart.avif";
import meesho from "../../assets/Footer Images/mesho.avif";
import bigbasket from "../../assets/Footer Images/bigbasket.avif";

function Available() {
  return (
    <div id="available_section" className="py-20  h-[600px] relative ">
      <img
        src={footerImg}
        alt=""
        className="object-cover w-full top-0 left-0 absolute z-[-50] h-full"
      />
      <div className="container">
        <div>
          <h2 className="text-primary text-5xl mb-12 font-medium text-center">
            Also Available on
          </h2>
          <div className="flex gap-5 items-center justify-between">
            <img src={amazon} alt="" />
            <img src={flipkart} alt="" />
            <img src={jiomart} alt="" />
            <img src={meesho} alt="" />
            <img src={bigbasket} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Available;
