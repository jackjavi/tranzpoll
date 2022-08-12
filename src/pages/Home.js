import React from "react";
import NavBar from "../Components/NavBar";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";

const Home = () => {
  const [newName, setNewName] = React.useState({ username: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", JSON.stringify(newName));
    setNewName({ username: "" });
  };

  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen px-8 pt-20 flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-[whitesmoke] p-4 rounded ">
          <div className="flex flex-col font-semibold text-slate-600 text-[16px]">
            <label htmlFor="name">ENTER YOUR NAME:</label>
            <input
              className="rounded shadow outline-[#1877f2] p-1 text-slate-600"
              type="text"
              id="name"
              name="username"
              value={newName.username}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            cursor-pointer
            className="bg-[#1877f2] w-full py-3 rounded-md mt-6 text-xl font-bold text-white text-[17px] px-[16px] border-2 border-[#1877f2]"
          >
            Save
          </button>
        </form>
        <Link to="survey0">
          <button>
            <ArrowCircleRightIcon
              sx={{ fontSize: 40 }}
              className="mt-8 text-white"
            />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
