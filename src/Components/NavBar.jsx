import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center w-full h-20 px-4 text-white font-[900] bg-black fixed">
      <div className="grid grid-cols-2 gap-1 w-screen px-8 ">
        <span className="text-[30px]">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500">T</span>
          <span className="text-[#1877f2]">S</span>
        </span>
        <h1 className=" text-xl md:text-3xl font-signature ml-2 ml-[-25%] ">
          TRANSPOLL SURVEYS
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
