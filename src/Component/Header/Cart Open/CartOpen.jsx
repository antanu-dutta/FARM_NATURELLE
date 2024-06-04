import React from "react";
import cart from "../../../assets/cart.png";
function CartOpen({ toggleCart, OpenCart }) {
  return (
    <div
      className={`absolute z-40 top-0 ${
        OpenCart ? "right-0" : ""
      }  h-screen bg-white w-1/4 rounded-3xl -right-[100rem] p-4 transition-all duraion`}
    >
      <h1 className="text-black text-center text-base font-medium">
        SHOPPING CART
        <i
          className="fa-solid fa-xmark float-end text-gray-600 cursor-pointer"
          onClick={toggleCart}
        ></i>
      </h1>
      <div
        id="cart-details"
        className="flex pt-20 flex-col justify-center items-center gap-3"
      >
        <img src={cart} alt="cart-bag" />
        <span className=" italic text-black text-base font-semibold">
          Your Shopping cart is empty
        </span>
        <a href="#" className=" text-blue-600 text-base font-normal">
          Continiue Shooping
        </a>
      </div>
    </div>
  );
}

export default CartOpen;
