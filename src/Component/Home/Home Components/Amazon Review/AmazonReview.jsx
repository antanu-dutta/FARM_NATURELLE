import React from "react";
import bg from "../../../../assets/Amazon review/1.webp";
function AmazonReview() {
  return (
    <div
      id="amazon_review"
      className="py-10 relative h-[400px] flex justify-center items-center"
    >
      <div className="container">
        <img
          src={bg}
          alt=""
          className="absolute top-0 left-0 -z-50 w-full h-full object-cover"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary text-5xl font-semibold mb-8 text-center">
            Over 30,000 reviews <br /> on Amazon
          </h1>
          <span className="text-xl text-primary font-medium text-center">
            We’ve received a lot of <br /> love and are thrilled to share some
            of <br /> the experiences of our happy customers.
          </span>
        </div>
      </div>
    </div>
  );
}

export default AmazonReview;
