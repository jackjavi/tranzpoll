import React from "react";
import NavBar from "../Components/NavBar";
import mpesa from "../Assets/mpesa.png";
import paypal from "../Assets/PayPal.svg.png";
import Separator from "../Components/Separator";

const Login = () => {
  const [faveMedia, setFaveMedia] = React.useState(null);

  React.useEffect(() => {
    const favMedia = JSON.parse(localStorage.getItem("favMedia"));
    if (favMedia) {
      setFaveMedia(favMedia);
    }
  }, []);

  const handleFaveMedia = (e) => {
    e.preventDefault();
    window.location.replace(`/${faveMedia}`);
  };
  return (
    <>
      <NavBar />
      <div className=" h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-8 pt-20 flex flex-col items-center justify-center">
        <form onSubmit={handleFaveMedia} className="bg-white p-4 w-[75vw]">
          <div>
            <p className="font-bold text-[14px]">ENTER YOUR MOBILE NUMBER:</p>
            <div className="flex flex-col items-center  ">
              <img
                src={mpesa}
                height=""
                width="50px"
                alt="Instagram logo"
                className=""
              />

              <input
                type="number"
                placeholder="e.g. 254 7xxxxxxxx"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="number"
              />
            </div>
          </div>
          <Separator />
          <div>
            <p className="font-bold text-[14px]">ENTER YOUR PAYPAL ACCOUNT:</p>
            <div className="flex flex-col items-center  ">
              <img
                src={paypal}
                height=""
                width="50px"
                alt="Instagram logo"
                className="mb-1"
              />

              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="number"
              />
            </div>
          </div>

          <p className="mt-8 font-medium">
            Click
            <button
              type="submit"
              className="text-[24px] bg-[#1877f2] p-2 mx-3 rounded-3xl"
            >
              here
            </button>
            to log in to your favorite social media platform and complete your
            submission
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
