import React from "react";
import { Instagram, Facebook, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const routes = [
    {
      name: "HOME",
      path: "/home",
    },
    {
      name: "ABOUT US",
      path: "/about",
    },
    {
      name: "SHOP",
      path: "/shop",
    },
    {
      name: "CONTACT US",
      path: "/contact",
    },
    {
      name: "BLOGS",
      path: "/blogs",
    },
  ];

  return (
    <>
      <footer className="w-full  bg-[#252525] text-[white] p-6  pt-24 relative">
        <div className="flex flex-row flex-wrap justify-between items-center border-b">
          <div className=" absolute top-[-50px] left-[45%] w-[174px] h-[114.16px] border-2 border-black  text-center p-4 footerlogo bg-[#FFFFFF]">
            <span className="font-semibold text-[25px] text-black ">
              Ethereal Elegance
            </span>
          </div>
          <div >
            <ul>
              <li className="font-normal text-[20px] m-4">CONTACT</li>
              <li className="text-[16px] m-4">58 White St., New York</li>
              <li className="text-[16px] m-4">EtherealElegance@gmail.com</li>
              <li className="text-[16px] m-4">+1 (800) 987 456 98</li>
            </ul>
          </div>

          <div className="flex flex-col  gap-8">
            <p>
              Enhance your natural beauty with our curated collection of
              cosmetics
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
              <div className="rounded-[50%] border p-2">
                <Instagram />
              </div>
              <div className="rounded-[50%] border p-2">
                <Facebook />
              </div>
            </div>
            <ul className="flex flex-row flex-wrap justify-evenly">
              {routes.map((items, index) => {
                return (
                  <li key={index}>
                    <Link to={items.path}>{items.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[20px]">
              Subscribe To our Newsletter
            </p>
            <div className="flex flex-row mt-4">
              <input
                className="p-2 bg-transparent border outline-none w-[250px]"
                type="email"
                placeholder="Email"
              />
              <Button className="bg-white h-[50px]  ">
                <ArrowRight color="black" />
              </Button>
            </div>
          </div>
        </div>
        <div >
            <p className="font-normal text-[10px] text-center p-4">COPYRIGHT © 2024 Ethereal Elegance </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
