import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="drop-shadow-lg flex justify-center items-center w-full h-20  px-4 text-white font-[900] bg-cyan-600 fixed">
      <div className="flex  w-screen px-8 ">
        <Link to="/">
          <span className="text-[30px] w-[20%] md:w-[40%] cursor-pointer">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500">
              T
            </span>
            <span className="text-[#1877f2] bg-gradient-to-r from-cyan-500 to-blue-500">
              S
            </span>
          </span>
        </Link>

        <h1 className="font-sans mx-auto whitespace-nowrap flex items-center no-wrap text-md md:text-xl md:text-3xl  ">
          TRANSPOLL SURVEYS
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
