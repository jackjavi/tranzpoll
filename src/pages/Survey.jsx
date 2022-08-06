import React from "react";
import { Link } from "react-router-dom";

const survey = () => {
  return (
    <div className=" h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 flex flex-col items-center justify-center">
      <div className="flex flex-col bg-[#1877f2] p-4 rounded-lg w-[100%]">
        <label className="text-[whitesmoke]">What is your name?</label>
        <input
          type="text"
          className=" rounded outline-none shadow border px-2 py-1"
        />
      </div>

      <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
        <p className="text-[whitesmoke]">
          Choose your favorite social media platform?
        </p>

        <input type="radio" value="facebook" id="facebook" name="facebook" />
        <label htmlFor="facebook" className="pl-2 text-[#e0e0e7]">
          Facebook
        </label>
        <br />

        <input type="radio" value="twitter" id="twitter" name="twitter" />
        <label htmlFor="twitter" className="pl-2 text-[#e0e0e7]">
          Twitter
        </label>
        <br />

        <input type="radio" value="Instagram" id="instagram" name="instagram" />
        <label htmlFor="instagram" className="pl-2 text-[#e0e0e7]">
          Instagram
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#e0e0e7]">
          TikTok
        </label>
      </div>

      <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
        <p className="text-white">What do you mostly use social media for?</p>

        <input
          type="radio"
          value="entertainment"
          id="entertainment"
          name="entertainment"
        />
        <label htmlFor="entertainment" className="pl-2 text-[#e0e0e7]">
          Entertainment
        </label>
        <br />

        <input type="radio" value="education" id="education" name="education" />
        <label htmlFor="education" className="pl-2 text-[#e0e0e7]">
          Education
        </label>
        <br />

        <input type="radio" value="business" id="business" name="business" />
        <label htmlFor="business" className="pl-2 text-[#e0e0e7]">
          Business
        </label>
        <br />

        <input type="radio" value="none" id="tiktok" name="none" />
        <label htmlFor="none" className="pl-2 text-[#e0e0e7]">
          None of the Above
        </label>
      </div>

      <Link to="/survey2">
        <button
          cursor-pointer
          className="bg-[#1877f2] py-3 rounded-md mt-6 text-xl font-bold w-full text-white text-[17px] px-[16px]"
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default survey;
