import React from "react";

function Likeopen({ toggleModal }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="bg-[#333333] w-full py-1 px-2 text-white flex gap-3 justify-end">
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={toggleModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div id="liked-content-container" className="p-4 flex flex-col gap-3">
          <h2 className="text-left text-3xl">My Wishlist</h2>
          <div
            id="input-box"
            className="flex gap-2 items-center border px-3 border-gray-300"
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Seach Item"
              className="p-3 border-none outline-none w-full"
            />
          </div>
          <span className="mt-10 text-sm text-gray-500 text-center">
            No Products!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Likeopen;
