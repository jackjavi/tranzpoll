import React from "react";

const facebook = () => {
  return (
    <div className="bg-[#f0f2f5] h-screen w-full font-[Heveltica] pt-4">
      <div className="flex justify-center  h-full flex-col md:flex-row md:gap-[5vw] md:items-center md:justify-center items-center mx-[16px] ">
        <div className="w-75vw]  md:w-[45vw] md:mt--12 flex flex-col  items-center  md:items-start">
          <h2 className=" text-[#1877f2] text-xl md:text-[70px] font-black py-6 text-[50px]">
            facebook
          </h2>

          <p className="text-[24px] w-[75%] md:w-[90%] md:text-[30px] md:mb-20">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="shadow-xl my-8 w-[75vw] bg-white p-4 rounded-lg md:w-[35vw] md:mb-20 flex flex-col gap-3 justify-center items-center">
          <input
            className="shadow outline-1 w-full font-[Helvetica] p-3 text-[14px] bg-[f5f6f7]  border rounded"
            type="text"
            placeholder="Mobile number or email address"
          />
          <input
            className="shadow outline-1 w-full font-[Helvetica] p-3 text-[14px] bg-[f5f6f7] border  rounded"
            type="text"
            placeholder="Password"
          />
          <button
            cursor-pointer
            className="bg-[#1877f2] py-3 rounded-md font-bold w-[100%] text-white text-[17px] px-[16px]"
          >
            Log in
          </button>

          <p className="cursor-pointer text-[#1877f2] text-[14px] font-medium ">
            Forgotten password?
          </p>

          <div className="border border-b-[#dadde1] w-full my-4"></div>

          <div className=" cursor-pointer text-white bg-[#42b72a] p-3 rounded-md text-[17px] font-bold">
            Create New Account
          </div>

          <p className="text-[#666] font-[14px]">
            <span className="text-[#1c1e21] font-semibold">Create a Page </span>
            for a celebrity, brand or business
          </p>
        </div>
      </div>
    </div>
  );
};

export default facebook;
