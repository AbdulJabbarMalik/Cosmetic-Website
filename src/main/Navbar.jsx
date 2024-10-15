import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import Cartslider from "./Cartslider";

const Navbar = () => {
  //use for notification
  const items = useSelector((state) => state.Cart.cart);

  const [isvisible, setIsvisible] = useState(false);

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
        <div className="logo">
          <h1 className="font-normal text-[15px] sm:text-[24px] ">Ethereal Elegance</h1>
        </div>

        <ul className="hidden flex-row sm:flex justify-evenly w-[40%] ">
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

        <div className="flex flex-row gap-6">
          <Link to="/">LOGIN</Link>
          <Search />
          <button className="relative">
            <ShoppingBag
              onClick={() => {
                setIsvisible(!isvisible);
              }}
            />
            {items.length > 0 && (
              <div className=" absolute top-[-5px] right-[-5px] w-[15px] h-[15px] rounded-[50%] bg-black text-white p-2 text-xs flex justify-center items-center">
                <span>{items.length}</span>
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
            ? "fixed right-0 transition-all z-50"
            : " fixed right-[-600px] transition-all "
        }`}
      >
        <Cartslider />
      </div>
    </>
  );
};

export default Navbar;
