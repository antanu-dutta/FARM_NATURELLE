import React, { useState } from "react";
import "./Menubar.css";
import logo from "../../../assets/logo.webp";
import Searchbar from "../Search Bar/Searchbar";
import Likeopen from "../LIke Open/Likeopen";
import CartOpen from "../Cart Open/CartOpen";
import { Link } from "react-router-dom";
function Menubar() {
  const menuData = [
    {
      heading: "Shop by Concern",
      items: [
        "Piles Relief",
        "Healthy Liver",
        "Magic Man Booster",
        "Digestive Fitness",
        "Easing Diabetes",
        "Hangover Shots",
        "Revital Body Shots",
        "Kidney Stone Care",
        "Glowing Women",
        "Stress Buster",
        "Powerful Heart",
        "Pain Relief",
        "Win Weight",
        "Detox Miracle Shot",
      ],
    },
    {
      heading: "Shop by Products",
      items: [
        "Honey",
        "Cooking Oil",
        "A2 Desi Cow Ghee",
        "Apple Cider Vinegar",
        "Herbal Juices",
        "Hill Turmeric",
        "Jaggery Amla Candy",
        "Wellness Oils",
        "Chyawanprash",
        "Nuts in Honey",
        "Stevia",
        "Shilajit",
        "Saffron",
        "Mouth Freshener",
        "Condiments",
      ],
    },
    {
      heading: "Business with us",
      items: [
        "Private Label",
        "Bulk Purchase (B2B)",
        "Dealership Enquiry",
        "Contact Us",
      ],
    },
    {
      heading: "Consult an Acharya (Doctor)",
      items: [],
    },
    {
      heading: "Gift",
      items: [],
    },
  ];

  const [hover, setHover] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [searchOpen, setSeachOpen] = useState(false);
  const [OpenCart, setOpenCart] = useState(false);
  const handleHover = (heading) => {
    setHover(hover === heading ? null : heading);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toogleSearch = () => {
    setSeachOpen(!searchOpen);
  };
  const toggleCart = () => {
    setOpenCart(!OpenCart);
  };
  return (
    <div
      className={`py-4 ${
        modalOpen || OpenCart ? "modal-background static bg-transparent" : ""
      }  ${searchOpen ? "relative" : ""}`}
    >
      <div
        className={`container mx-auto flex justify-between items-center ${
          searchOpen ? "hidden" : ""
        }`}
      >
        <div id="logo_menu" className="flex items-center gap-6">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul className="flex relative">
            {menuData.map((menu, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHover(menu.heading)}
                onMouseLeave={() => handleHover(null)}
                className="relative cursor-pointer group"
              >
                <li className="font-semibold text-base text-black px-5">
                  {menu.heading}
                  {menu.items.length > 0 && (
                    <i className="fa-solid fa-chevron-down ms-2 text-sm"></i>
                  )}
                </li>
                {menu.items.length > 0 && (
                  <ul
                    className={`opacity-0 absolute top-6 left-9 bg-white px-4 shadow-2xl flex-col gap-2 py-5 group-hover:opacity-100 transition-all z-10 ${
                      hover === menu.heading ? "flex" : "hidden"
                    }`}
                  >
                    {menu.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-black font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
        <div id="menu-icons" className="flex gap-6">
          <div
            id="heart"
            className="cursor-pointer relative"
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <div className="flex items-center justify-center text-sm text-white w-4 h-4 bg-primary rounded-full absolute top-0 left-3">
              0
            </div>
          </div>
          <div id="search" className="cursor-pointer" onClick={toogleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div id="user" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div
            id="cart"
            onClick={toggleCart}
            className="cursor-pointer relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <div className="flex items-center justify-center text-sm text-white w-4 h-4 bg-primary rounded-full absolute top-0 left-3">
              0
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <Likeopen toggleModal={toggleModal} />}
      {searchOpen && <Searchbar toogleSearch={toogleSearch} />}
      {OpenCart && <CartOpen toggleCart={toggleCart} OpenCart={OpenCart} />}
    </div>
  );
}

export default Menubar;
