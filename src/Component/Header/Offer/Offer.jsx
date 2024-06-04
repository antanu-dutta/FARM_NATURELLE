import React from "react";
import "./Offer.css";

function Offer() {
  return (
    <div className="bg-primary p-2 flex items-center justify-center gap-4">
      <span className="text-white text-sm font-semibold">
        Get an extra 5% discount on orders over ₹1000, up to ₹100 - Use coupon
      </span>
      <i className="fa-regular fa-copy text-xl text-white"></i>
    </div>
  );
}

export default Offer;
