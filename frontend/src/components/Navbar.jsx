import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="shadow-md fixed top-0 w-full max-w-[1400px] z-50 py-5 px-7 items-center justify-between flex  bg-green-800 backdrop-blur-sm   text-white ">
      <Link to="/">
        <h1 className=" text-3xl font-bold">The naija news hub</h1>
      </Link>
      <div>
        <ul className="flex md:space-x-9 space-x-4 font-medium">
          <li>
            <span>01.</span>
            <a href="">Sports</a>
          </li>
          <li>
            <span>02.</span>
            <a href="">Music</a>
          </li>
          <li>
            <span>03.</span>
            <a href="">Stock</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
