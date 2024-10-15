import { Button } from "@/components/ui/button";

import React from "react";

const Aboutsection = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap  justify-evenly p-10 w-full ">
        
        <div className="image-card w-[300px] h-[498px] relative ">
          <img
            className=" w-[400px] h-[400px] absolute top-[-150px] left-[-130px] -z-10"
            src="/wing.svg"
            alt=""
          />
          <img src="/fancylook.svg" alt="" />
        </div>

        <div className="about-content  w-[40%]">
          <span className="font-normal text-[32px] text-[#BFBFBF] italic">
            About us
          </span>
          <h2 className="font-normal text-[43px] italic">
            We Guaranteed a High Quality
          </h2>
          <p className="font-normal text-[14px] border-l-4 border-l-[#C75D68] pl-6">
            At EtherealElegance, we believe in the transformative power of
            beauty. Our curated cosmetics collection is meticulously crafted to
            inspire confidence and elevate your natural allure.
          </p>
          <p className="font-light text-[14px] text-[#7A7A7A] leading-[30px] mt-[30px]">
            We understand that beauty is more than just skin deep; it's about
            embracing your individuality and expressing your personal style with
            effortless elegance. That's why we offer premium offerings that
            cater to modern sophistication, ensuring you feel empowered and
            beautiful in every moment.
          </p>
          <div className="flex flex-row gap-16 items-center mt-5">
            <div className="text-center">
              <span className=" font-serif italic text-[34px] font-normal text-[#C75D68]">
                500 k
              </span>
              <p className=" text-[#292929] text-[14px] font-normal">
                Cosmetics sold
              </p>
            </div>
            <div className="text-center">
              <span className=" font-serif italic text-[34px] font-normal text-[#C75D68]">
                10 +
              </span>
              <p className=" text-[#292929] text-[14px] font-normal">
                years Experience
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className=" w-[212px] h-[62px] border2 border-black text-[18px] font-semibold mt-8 p-4
            tracking-[3px]  "
          >
            EXPLORE MORE
          </Button>
        </div>
      </div>
    </>
  );
};

export default Aboutsection;
