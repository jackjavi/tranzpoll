import React from "react";
import NavBar from "../Components/NavBar";

const survey = () => {
  const handleFaveMedia = (e) => {
    e.preventDefault();
    window.location.replace("/survey4");
  };
  return (
    <>
      <NavBar />

      <form
        onSubmit={handleFaveMedia}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen px-8 pt-20 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col bg-[#1877f2] p-4 rounded-lg w-[100%]">
          <p className="font-bold text-[whitesmoke]">
            Pick one choice amongst the five in the Likert scale
          </p>
        </div>

        <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
          <p className="text-[whitesmoke]">
            I use social media to drive traffic to my website.
          </p>

          <input type="radio" value="facebook" id="facebook" name="ls2" />
          <label htmlFor="facebook" className="pl-2 text-[#e0e0e7]">
            Strongly Disagree
          </label>
          <br />

          <input type="radio" value="twitter" id="twitter" name="ls2" />
          <label htmlFor="twitter" className="pl-2 text-[#e0e0e7]">
            Disagree
          </label>
          <br />

          <input type="radio" value="Instagram" id="instagram" name="ls2" />
          <label htmlFor="instagram" className="pl-2 text-[#e0e0e7]">
            Neutral
          </label>
          <br />

          <input type="radio" value="TikTok" id="tiktok" name="ls2" />
          <label htmlFor="tiktok" className="pl-2 text-[#e0e0e7]">
            Agree
          </label>
          <br />

          <input type="radio" value="TikTok" id="tiktok" name="ls2" />
          <label htmlFor="tiktok" className="pl-2 text-[#e0e0e7]">
            Strongly Agree
          </label>
        </div>

        <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
          <p className="text-[whitesmoke]">
            Social media causes depression and loniliness.
          </p>

          <input type="radio" value="facebook" id="facebook" name="ls3" />
          <label htmlFor="facebook" className="pl-2 text-[#e0e0e7]">
            Strongly Disagree
          </label>
          <br />

          <input type="radio" value="twitter" id="twitter" name="ls3" />
          <label htmlFor="twitter" className="pl-2 text-[#e0e0e7]">
            Disagree
          </label>
          <br />

          <input type="radio" value="Instagram" id="instagram" name="ls3" />
          <label htmlFor="instagram" className="pl-2 text-[#e0e0e7]">
            Neutral
          </label>
          <br />

          <input type="radio" value="TikTok" id="tiktok" name="ls3" />
          <label htmlFor="tiktok" className="pl-2 text-[#e0e0e7]">
            Agree
          </label>
          <br />

          <input type="radio" value="TikTok" id="tiktok" name="ls3" />
          <label htmlFor="tiktok" className="pl-2 text-[#e0e0e7]">
            Strongly Agree
          </label>
        </div>

        <button
          type="submit"
          cursor-pointer
          className="bg-[#1877f2] py-3 rounded-md mt-6 text-xl font-bold w-full text-white text-[17px] px-[16px]"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default survey;
