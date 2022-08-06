import React from "react";
import { Link } from "react-router-dom";

const survey = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen px-8 py-4 flex flex-col items-center justify-center">
      <div className="flex flex-col bg-[#1877f2] p-4 rounded-lg w-[100%]">
        <p className="font-bold text-[whitesmoke]">
          Pick one choice amongst the five in the Likert scale
        </p>
      </div>

      <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
        <p className="text-[whitesmoke]">
          Spending time on social media is a waste of time.
        </p>

        <input type="radio" value="facebook" id="facebook" name="facebook" />
        <label htmlFor="facebook" className="pl-2 text-[#e0e0e7]">
          Strongly Disagree
        </label>
        <br />

        <input type="radio" value="twitter" id="twitter" name="twitter" />
        <label htmlFor="twitter" className="pl-2 text-[#e0e0e7]">
          Disagree
        </label>
        <br />

        <input type="radio" value="Instagram" id="instagram" name="instagram" />
        <label htmlFor="instagram" className="pl-2 text-[#e0e0e7]">
          Neutral
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#e0e0e7]">
          Agree
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#e0e0e7]">
          Strongly Agree
        </label>
      </div>

      <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
        <p className="text-[whitesmoke]">
          Social media is a good source of up to date information.
        </p>

        <input type="radio" value="facebook" id="facebook" name="facebook" />
        <label htmlFor="facebook" className="pl-2 text-[#e0e0e7]">
          Strongly Disagree
        </label>
        <br />

        <input type="radio" value="twitter" id="twitter" name="twitter" />
        <label htmlFor="twitter" className="pl-2 text-[#e0e0e7]">
          Disagree
        </label>
        <br />

        <input type="radio" value="Instagram" id="instagram" name="instagram" />
        <label htmlFor="instagram" className="pl-2 text-[#e0e0e7]">
          Neutral
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#e0e0e7]">
          Agree
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#e0e0e7]">
          Strongly Agree
        </label>
      </div>

      <Link to="/survey3">
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
