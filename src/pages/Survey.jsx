import React from "react";

const survey = () => {
  return (
    <div className="bg-[#B4B4BB] h-screen w-screen px-8 py-4 flex flex-col items-center">
      <div className="flex flex-col bg-white p-4 rounded-lg w-[75vw]">
        <label>What is your name?</label>
        <input type="text" className="rounded shadow border px-2 py-1" />
      </div>

      <div className="bg-white p-4 rounded-lg w-[75vw] mt-2">
        <p className="text-black">
          Choose your favorite social media platform?
        </p>

        <input type="radio" value="facebook" id="facebook" name="facebook" />
        <label htmlFor="facebook" className="pl-2 text-[#84848C]">
          Facebook
        </label>
        <br />

        <input type="radio" value="twitter" id="twitter" name="twitter" />
        <label htmlFor="twitter" className="pl-2 text-[#84848C]">
          Twitter
        </label>
        <br />

        <input type="radio" value="Instagram" id="instagram" name="instagram" />
        <label htmlFor="instagram" className="pl-2 text-[#84848C]">
          Instagram
        </label>
        <br />

        <input type="radio" value="TikTok" id="tiktok" name="tiktok" />
        <label htmlFor="tiktok" className="pl-2 text-[#84848C]">
          TikTok
        </label>
      </div>
    </div>
  );
};

export default survey;
