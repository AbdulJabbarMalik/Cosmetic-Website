import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { Menu } from "lucide-react";
import Cartslider from "./Cartslider";

const Navbar = () => {
  //used for notification
  const items = useSelector((state) => state.Cart.cart);

  const [isvisible, setIsvisible] = useState(false);
  const [showmenu , setShowmenu] = useState(false)

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
      <nav className="flex flex-row justify-between items-center p-6 bg-[#F5F5F5] sticky top-0 w-full  border border-b-2 z-50">
        <div className="logo flex flex-row items-center gap-4">
          <div className="md:hidden block" onClick={()=> setShowmenu(!showmenu)}>
            <Menu />
          </div>
          <h1 className="font-normal text-[15px] md:text-[24px] ">
            Ethereal Elegance
          </h1>
        </div>

        <ul className={` flex  md:flex-row  flex-col justify-evenly md:w-[40%] md:h-auto md:sticky absolute top-[100%]  ${showmenu == true ? 'left-0 transition-all' : 'left-[-350px] transition-all'} w-[40%]  items-center h-[300px] md:bg-transparent border  md:border-none bg-[#F5F5F5]    `}>
          {routes.map((items, index) => {
            return (
              <li
                key={index}
                className="  after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C75D68] after:scale-0 hover:after:scale-100 after:ease-in after:duration-200 after:origin-bottom-left relative "
              >
                <Link to={items.path}>{items.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-row items-center gap-3 sm:gap-6">
          <Link to="/">
            <span className="text-sm sm:text-lg">LOGIN</span>
          </Link>
          <Search className="size-4 sm:size-6" />
          <button className="relative p-1 ">
            <ShoppingBag
              className="size-4 sm:size-6"
              onClick={() => {
                setIsvisible(!isvisible);
              }}
            />
            {items.length > 0 && (
              <div className=" absolute top-[-5px] right-[-5px] w-[15px] h-[15px]  rounded-[50%] bg-black text-white p-2  flex justify-center items-center">
                <span className="text-[10px]">{items.length}</span>
              </div>
            )}
          </button>
          {/* <Link to="" className="relative">
          </Link> */}
        </div>
      </nav>
      <div
        className={` ${
          isvisible
            ? "fixed right-0 transition-all z-50 "
            : " fixed right-[-600px] transition-all "
        } z-50 `}
      >
        <Cartslider />
      </div>
    </>
  );
};

export default Navbar;
