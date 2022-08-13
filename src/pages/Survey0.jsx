import React from "react";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

const Survey0 = () => {
  const [name, setName] = React.useState(null);

  React.useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"));
    if (username) {
      setName(username.username);
    }
  }, []);

  if (name) {
    console.log(name);
  }
  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen px-8 pt-20 flex flex-col items-center justify-center">
        <p className="text-white">Welcome {name}</p>
        <p className="text-white mt-3">You are voter rank # </p>
        <Link to="/survey1">
          <button className="bg-white py-2 px-6 rounded-xl mt-6">
            START SURVEY
          </button>
        </Link>
      </div>
    </>
  );
};

export default Survey0;
