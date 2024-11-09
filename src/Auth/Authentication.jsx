import { Login } from "@/authcomponents/Login";
import React from "react";

const Authentication = () => {
  return (
    <>
      <div className="w-[100%] h-screen flex flex-row justify-center">
        <div className="h-full sm:w-[50%] w-[100%]  flex flex-row justify-center items-center  bg-[#FFFFFF] relative">
          <Login/>
          <img className="absolute top-0 left-0" src="/texture-5sl 2.svg" alt="" />
        </div>
        <div className="w-[50%]  h-full hidden sm:block ">
          <img className="w-full h-full object-cover" src="/loginframe.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Authentication;
