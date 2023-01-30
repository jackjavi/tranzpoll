import React from "react";

const Separator = () => {
  return (
    <div className="flex w-full px-10 items-center">
      <span className=" h-[1px] flex-[5] bg-gray-400"></span>
      <span className="px-2">OR</span>
      <span className=" h-[1px] flex-[5] bg-gray-400"></span>
    </div>
  );
};

export default Separator;
