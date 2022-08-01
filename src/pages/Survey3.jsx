import React from "react";

const survey = () => {
  return (
    <div className="bg-[#B4B4BB] h-screen w-screen px-8 py-4 flex flex-col items-center">
      <div className="flex flex-col bg-white p-4 rounded-lg w-[100%]">
        <p className="font-bold">
          Pick one choice amongst the five in the Likert scale
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg w-[100%] mt-2">
        <p className="text-black">
          I use social media to drive traffic to my website.
        </p>

        <input type="radio" value="facebook" id="facebook" name="facebook" />
        <label htmlFor="facebook" className="pl-2 text-[#84848C]">
          Strongly Disagree
        </label>
        <br />

        <input type="radio" value="twitter" id="twitter" name="twitter" />
        <label htmlFor="twitter" className="pl-2 text-[#84848C]">
          Disagree
        </label>
        <br />

        <input type="radio" value="Instagram" id="instagram" name="instagram" />
        <label htmlFor="instagram" className="pl-2 text-[#84848C]">
          Neutral
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#84848C]">
          Agree
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#84848C]">
          Strongly Agree
        </label>
      </div>

      <div className="bg-white p-4 rounded-lg w-[100%] mt-2">
        <p className="text-black">
          Social media causes depression and loniliness.
        </p>

        <input type="radio" value="facebook" id="facebook" name="facebook" />
        <label htmlFor="facebook" className="pl-2 text-[#84848C]">
          Strongly Disagree
        </label>
        <br />

        <input type="radio" value="twitter" id="twitter" name="twitter" />
        <label htmlFor="twitter" className="pl-2 text-[#84848C]">
          Disagree
        </label>
        <br />

        <input type="radio" value="Instagram" id="instagram" name="instagram" />
        <label htmlFor="instagram" className="pl-2 text-[#84848C]">
          Neutral
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#84848C]">
          Agree
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#84848C]">
          Strongly Agree
        </label>
      </div>

      <button
        cursor-pointer
        className="bg-[#1877f2] py-3 rounded-md mt-6 text-xl font-bold w-[50%] text-white text-[17px] px-[16px]"
      >
        Next
      </button>
    </div>
  );
};

export default survey;
