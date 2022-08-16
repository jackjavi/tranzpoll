import React from "react";

import NavBar from "../Components/NavBar";

const survey = () => {
  return (
    <>
      <NavBar />
      <div className=" h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-8 pt-20 flex flex-col items-center justify-center">
        <div className="text-white flex flex-col ">
          <h3 className="flex items-center justify-center font-bold text-[30px]">
            POLL COMPLETE!
          </h3>
          <p className="flex items-center justify-center font-bold mt-12 text-[20px]">
            THANK YOU FOR YOUR SUBMISSION
          </p>
          <p className="flex items-center justify-center font-bold mt-12 text-[20px]">
            YOU WILL RECEIVE YOUR PAYMENT SOON
          </p>
        </div>
      </div>
    </>
  );
};

export default survey;
