import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className=" h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-8 pt-20 flex flex-col items-center justify-center">
        <div className="bg-white p-4 w-[50vw]">
          <p>ENTER YOUR MOBILE NUMBER:</p>
          <div className="flex items-center justify-between ">
            <span>+254</span>
            <input
              className="border-2 border-black rounded-lg p-1"
              type="number"
            />
          </div>
          <p>
            Click{" "}
            <Link to="/facecook">
              <span>here</span>
            </Link>{" "}
            to log in to facebook and complete your submission
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
