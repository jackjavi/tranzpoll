import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const survey4 = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen px-8 pt-20 flex flex-col items-center justify-center">
        <div className="flex flex-col bg-[#1877f2] p-4 rounded-lg w-[100%]">
          <p className="font-bold text-[whitesmoke]">
            Pick one choice amongst the five in the Likert scale
          </p>
        </div>

        <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
          <p className="text-[whitesmoke]">
            I am a victim of cyberbullying and social media hacking.
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

          <input
            type="radio"
            value="Instagram"
            id="instagram"
            name="instagram"
          />
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
            Social is a place for noble causes and practices.
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

          <input
            type="radio"
            value="Instagram"
            id="instagram"
            name="instagram"
          />
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

        <Link to="/facecook">
          <button
            cursor-pointer
            className="bg-[#1877f2] py-3 rounded-md mt-6 text-xl font-bold w-full text-white text-[17px] px-[16px]"
          >
            Next
          </button>
        </Link>
      </div>
    </>
  );
};

export default survey4;
