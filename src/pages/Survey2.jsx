import React from "react";
import NavBar from "../Components/NavBar";

const survey = () => {
  const handleFaveMedia = (e) => {
    e.preventDefault();
    window.location.replace("/survey3");
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
            Spending time on social media is a waste of time.
          </p>

          <input type="radio" value="SA" id="sa" name="ls" />
          <label htmlFor="sa" className="pl-2 text-[#e0e0e7]">
            Strongly Disagree
          </label>
          <br />

          <input type="radio" value="D" id="twitter" name="ls" />
          <label htmlFor="d" className="pl-2 text-[#e0e0e7]">
            Disagree
          </label>
          <br />

          <input type="radio" value="N" id="n" name="ls" />
          <label htmlFor="n" className="pl-2 text-[#e0e0e7]">
            Neutral
          </label>
          <br />

          <input type="radio" value="A" id="a" name="ls" />
          <label htmlFor="a" className="pl-2 text-[#e0e0e7]">
            Agree
          </label>
          <br />

          <input type="radio" value="SA" id="sa" name="ls" />
          <label htmlFor="sa" className="pl-2 text-[#e0e0e7]">
            Strongly Agree
          </label>
        </div>

        <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
          <p className="text-[whitesmoke]">
            Social media is a good source of up to date information.
          </p>

          <input type="radio" value="SD1" id="sd1" name="ls1" />
          <label htmlFor="sd1" className="pl-2 text-[#e0e0e7]">
            Strongly Disagree
          </label>
          <br />

          <input type="radio" value="D1" id="d1" name="ls1" />
          <label htmlFor="d1" className="pl-2 text-[#e0e0e7]">
            Disagree
          </label>
          <br />

          <input type="radio" value="N1" id="n1" name="ls1" />
          <label htmlFor="n1" className="pl-2 text-[#e0e0e7]">
            Neutral
          </label>
          <br />

          <input type="radio" value="A1" id="a1" name="ls1" />
          <label htmlFor="a1" className="pl-2 text-[#e0e0e7]">
            Agree
          </label>
          <br />

          <input type="radio" value="SA1" id="sa1" name="ls1" />
          <label htmlFor="sa1" className="pl-2 text-[#e0e0e7]">
            Strongly Agree
          </label>
        </div>

        <button
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
