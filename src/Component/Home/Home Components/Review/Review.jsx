import React from "react";
import img1 from "../../../../assets/Reviews Photos/1.png";
import img2 from "../../../../assets/Reviews Photos/2.png";
import img3 from "../../../../assets/Reviews Photos/3.png";
import img4 from "../../../../assets/Reviews Photos/4.png";

const Review = () => {
  const reviewObj = [img1, img2, img3, img4];

  return (
    <div id="review">
      <div className="container">
        <h2 className=" text-primary text-4xl mb-10 text-center font-medium">
          Customers Love our products
        </h2>
        <div className="flex px-5 gap-2">
          {reviewObj.map((item, index) => (
            <div className="w-1/4 overflow-hidden">
              <img src={item} alt="" className="w-full rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
