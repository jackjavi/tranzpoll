import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen px-8 py-4 flex flex-col items-center">
      <Link to="/survey1">
        <button
          cursor-pointer
          className="bg-[#1877f2] w-full py-3 rounded-md mt-6 text-xl font-bold text-white text-[17px] px-[16px]"
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default Home;
