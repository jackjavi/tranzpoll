import React from "react";
import NavBar from "../Components/NavBar";

const Survey1 = () => {
  const [favMedia, setFavMedia] = React.useState("null");

  const onOptionChange = (e) => {
    setFavMedia(e.target.value);
  };

  const handleFaveMedia = (e) => {
    e.preventDefault();
    localStorage.setItem("favMedia", JSON.stringify(favMedia));
    window.location.replace("/survey2");
  };
  return (
    <>
      <NavBar />
      <form
        onSubmit={handleFaveMedia}
        className=" h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-8 pt-20 flex flex-col items-center justify-center"
      >
        <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
          <p className="text-[whitesmoke]">
            Is facebook your favorite social media platform?
          </p>

          <input
            type="radio"
            value="facebook"
            id="facebook"
            name="ls6"
            required
            onChange={onOptionChange}
          />
          <label htmlFor="facebook" className="pl-2 text-[#e0e0e7]">
            Yes
          </label>
          <br />

          <input
            type="radio"
            value="not-facebook"
            id="not-facebook"
            onChange={onOptionChange}
            name="ls6"
          />
          <label htmlFor="twitter" className="pl-2 text-[#e0e0e7]">
            No
          </label>
          <br />
        </div>

        <div className="bg-[#1877f2] p-4 rounded-lg w-[100%] mt-2">
          <p className="text-white">What do you mostly use social media for?</p>

          <input
            type="radio"
            value="entertainment"
            id="entertainment"
            name="ls7"
            required
          />
          <label htmlFor="entertainment" className="pl-2 text-[#e0e0e7]">
            Entertainment
          </label>
          <br />

          <input type="radio" value="education" id="education" name="ls7" />
          <label htmlFor="education" className="pl-2 text-[#e0e0e7]">
            Education
          </label>
          <br />

          <input type="radio" value="business" id="business" name="ls7" />
          <label htmlFor="business" className="pl-2 text-[#e0e0e7]">
            Business
          </label>
          <br />

          <input type="radio" value="none" id="tiktok" name="ls7" />
          <label htmlFor="none" className="pl-2 text-[#e0e0e7]">
            None of the Above
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

export default Survey1;
