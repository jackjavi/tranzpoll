import React from "react";
import { useNavigate } from "react-router-dom";
import twitter from "../Assets/Twitter-logo.svg.webp";
import apple from "../Assets/Apple_logo_black.svg.webp";
import Separator from "../Components/Separator";

const Twitter = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // make a request to the backend
    setLoading(true);

    // set a timeout
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 2000);

    // clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="sm:bg-gray-100 bg-white flex-col gap-3 h-screen w-full flex justify-center items-center">
      <div className="sm:w-[350px] w-full pt-[12px] sm:border border-gray-300 bg-white">
        <div className="w-90vw md:w-45vw flex flex-col items-center">
          <div className="flex flex-col items-center justify-center p-4 pb-12">
            <img
              src={twitter}
              height=""
              width="40px"
              alt="Twitter logo"
              className="mb-4"
            />
            <p className="text-[25px] font-bold">Sign in to Twitter</p>
          </div>
          <div className=" w-[100%] px-10">
            <div className="flex items-center py-2 gap-2 rounded-full font-semibold cursor-pointer px-10 border border-gray-400">
              <span>
                <img
                  src={apple}
                  height=""
                  width="20px"
                  alt="Instagram logo"
                  className=""
                />
              </span>
              <span className="">Sign in with Apple</span>
            </div>
          </div>
          <Separator />

          <form
            onSubmit={handleSubmit}
            className=" w-full bg-white px-10 pb-5 pt-2  rounded-lg flex flex-col gap-3"
          >
            <input
              className="w-full p-4 text-gray-700 text-sm bg-[#efefef] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Phone number, username, or email"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleLogin}
              required
            />

            <button
              type="submit"
              className="bg-[#47afff] py-2 rounded-full bg-black font-bold w-full text-white"
            >
              Next
            </button>
            {loading && (
              <p className="text-gray-700 text-sm font-medium">Loading...</p>
            )}

            <p className="text-blue-500 text-sm mx-auto">Forgotten password?</p>
          </form>
        </div>
        <div className="w-[350px] py-[20px] text-[14px] bg-white flex justify-center items-center">
          <span className="">
            Don't have an account?{" "}
            <span className="text-[#0095f6] font-semibold">Sign up</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
