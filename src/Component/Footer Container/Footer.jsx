import React from "react";
import logo from "../../assets/logo.webp";
import visa from "../../assets/Footer Images/visa.webp";
import amex from "../../assets/Footer Images/amex.png";
import applepay from "../../assets/Footer Images/applepay.webp";
import gpay from "../../assets/Footer Images/gpay.webp";
import mastercard from "../../assets/Footer Images/mastercard.webp";
import discover from "../../assets/Footer Images/discover.png";
import shopify from "../../assets/Footer Images/shopify.webp";

function Footer() {
  const categories = [
    "Honey",
    "Cooking Oil",
    "A2 Ghee",
    "Apple Cider Vinegar",
    "Herbal Juices",
    "Hill Turmeric",
    "Amla candy",
    "Wellness Oils",
    "Stevia",
  ];
  const importantLinks = [
    "About Us",
    "Our Farms",
    "Contact Us",
    "Bulk Purchase",
    "Blogs",
    "Privacy Policy",
    "Terms and Condition",
    "Shipping Policy",
    "Refund Policy",
  ];
  const payout = [visa, mastercard, amex, gpay, applepay, shopify, discover];

  return (
    <footer id="footer" className="bg-primary ">
      <div className="container">
        <div className="flex gap-12 py-20">
          <div className="flex-1">
            <img src={logo} alt="" className="mb-4" />
            <span className="text-white text-sm font-semibold block mb-5">
              Become a Insider and get 10% off your order today. Plus we'll keep
              you up-to-date with the latest theme news.
            </span>
            <div className="flex items-center px-4 bg-white rounded-lg overflow-hidden">
              <input
                type="text"
                className="border-none outline-none w-full p-2 text-base font-medium"
                placeholder="Enter your email address"
              />
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <ul className="flex-1">
            <span className="text-white uppercase font-bold text-lg mb-5 block">
              categories
            </span>
            {categories.map((item, index) => (
              <li key={index} className="mb-3 text-white font-normal text-base">
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex-1">
            <span className="text-white uppercase font-bold text-lg mb-5 block">
              Important links
            </span>
            {importantLinks.map((item, index) => (
              <li key={index} className="mb-3 text-white font-normal text-base">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex-1">
            <span className="text-white uppercase font-bold text-lg mb-5 block">
              contact info
            </span>
            <span className="block uppercase text-base mb-5 font-normal text-white">
              phone: <br /> 9810988725, 8130531333
            </span>
            <span className="block text-base font-normal text-white">
              E-MAIL: <br /> hello@farmnaturelle.com
            </span>
            <div className="flex gap-4 mt-5 px-4 text-2xl text-white">
              <i class="fa-brands fa-facebook cursor-pointer"></i>
              <i class="fa-brands fa-instagram cursor-pointer"></i>
              <i class="fa-brands fa-whatsapp cursor-pointer"></i>
              <i class="fa-brands fa-youtube cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 border-t-2 border-gray-950">
        <div className="container">
          <div className="flex justify-between">
            <span className="text-white text-base">
              &#169; 2024 Farm Naturelle . All rights reserved.
            </span>
            <div className="flex gap-3">
              {payout.map((item, index) => (
                <img src={item} alt="" className="w-[50px]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
