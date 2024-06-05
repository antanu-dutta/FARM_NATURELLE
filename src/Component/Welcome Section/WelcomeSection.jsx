import React from "react";
import "./WelcomeSection.css";
import img1 from "../../assets/Welcome/1.avif";
import img2 from "../../assets/Welcome/2.avif";
import bg from "../../assets/Welcome/bg.avif";

function WelcomeSection() {
  return (
    <div id="welcome_section" className="bg-primary relative">
      <div className="container">
        <img
          src={bg}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex p-10 gap-8">
          <div className="flex-1">
            <span className="text-lg uppercase mb-4 block font-normal text-[#b4b448] ">
              welcome to farm naturelle
            </span>
            <h2 className="text-white text-4xl font-semibold mb-5">
              Here Nature's Purest Treasures are nurtured and harvested for your
              well-being.
            </h2>
            <img src={img1} alt="" className="w-full" />
          </div>
          <div className="flex-1">
            <img src={img2} alt="" className="w-full" />
            <p className="text-base mt-4 text-white font-medium">
              At Farm Naturelle, we believe that the path to true wellness
              begins with embracing the gifts of nature. Through our organic
              farming methods and sustainable approach, we deliver a diverse
              range of products that are not only good for you but also good for
              the planet. Join us as we cultivate a healthier future, one
              harvest at a time, and savor the authentic flavors of Farm
              Naturelle that nourish both body and soul.
            </p>
            <div className="mt-5">
              <a
                href=""
                className="text-white text-lg border me-6 border-white font-semibold rounded-lg px-6 py-2 "
              >
                Know More
              </a>
              <a
                href=""
                className="bg-white px-6 py-2 rounded-lg text-lg font-medium text-primary"
              >
                Book a farm visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
