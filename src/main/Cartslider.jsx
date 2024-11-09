import { decrementQuan, deletItem, incrementQuan } from "@/redux/slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ShoppingCart , Trash2 } from "lucide-react";
import { data } from "autoprefixer";

const Cartslider = () => {
  const cartData = useSelector((state) => state.Cart.cart);

  const dispatch = useDispatch();

  const totalAmount = cartData.reduce((total, item) => {
    return total + item.data.price * item.quan;
  }, 0);

  return (
    <>
      <div className="sm:w-[500px] w-[100%]    h-full  shadow-2xl   bg-[#F5F5F5] rounded-sm relative ">
          <div className="bg-black   py-2 mx-2  px-4 rounded-md flex flex-row justify-between items-center">
            <h1 className="text-white text-center text-2xl">Your Items</h1>
            <ShoppingCart stroke="white" />
          </div>
        <div className="flex flex-col  h-[80%] md:h-[70%] lg:h-[75%] xl:h-[80%] p-2 xl:pb-6 overflow-y-scroll ">
          {cartData.length > 0 ? (
            cartData.map((items, index) => {
              return (
                <div
                  key={index}
                  className="cart-item flex p-2 flex-row items-center w-full shadow-xl rounded-md"
                >
                  {/* /////////////// */}
                  <div className=" w-[15%]">
                    <img src={items.data.thumbnail} alt="" />
                  </div>

                  {/* //////////// */}
                  <div className="flex flex-col justify-end  w-[50%] p-2 ">
                    <h3 className="text-xs md:text-sm">{items.data.title}</h3>
                    <p className="text-xs md:text-sm">
                      <span className="text-[#C75D68]">By </span>
                      {items.data.brand}
                    </p>
                  </div>

                  {/* ///////////// */}
                  <div className=" md:w-[15%] w-[20%] flex flex-row  border justify-between items-center p-1">
                    {items.quan === 1 ? <button onClick={()=> dispatch(deletItem(items.data.id))} ><Trash2 size={15} className="hover:text-red-600" /></button>  : <button
                      onClick={() => dispatch(decrementQuan(items.data.id))}
                      className="h-full"
                    >
                      -
                    </button> }
                    

                    <span className="text-sm">{items.quan}</span>
                    <button
                      onClick={() => dispatch(incrementQuan(items.data.id))}
                      className="h-full"
                    >
                      +
                    </button>
                  </div>

                  {/* /////////// */}
                  <div className=" w-[20%]  flex items-end justify-end p-2 ">
                    <p>$<span className="text-[#C75D68]">{(items.data.price * items.quan).toFixed(2)}</span></p>
                  </div>

                  {/* Delete Button */}
                  {/* <button onClick={()=> dispatch(deletItem(items.data.id))} class="group relative flex h-10 w-10 flex-col items-center justify-center shadow-lg overflow-hidden rounded-[50%] border-2 border-white bg-black hover:bg-red-600 p-2 ">
                    <svg
                      viewBox="0 0 1.625 1.625"
                      class="absolute -top-7 fill-white delay-100 group-hover:top-4 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                      height="12"
                      width="12"
                    >
                      <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"></path>
                      <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"></path>
                      <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"></path>
                    </svg>
                    <svg
                      width="12"
                      fill="none"
                      viewBox="0 0 39 7"
                      class="origin-right duration-500 group-hover:rotate-90"
                    >
                      <line
                        stroke-width="4"
                        stroke="white"
                        y2="5"
                        x2="39"
                        y1="5"
                      ></line>
                      <line
                        stroke-width="3"
                        stroke="white"
                        y2="1.5"
                        x2="26.0357"
                        y1="1.5"
                        x1="12"
                      ></line>
                    </svg>
                    <svg width="12" fill="none" viewBox="0 0 33 39" class="">
                      <mask fill="white" id="path-1-inside-1_8_19">
                        <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                      </mask>
                      <path
                        mask="url(#path-1-inside-1_8_19)"
                        fill="white"
                        d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                      ></path>
                      <path
                        stroke-width="4"
                        stroke="white"
                        d="M12 6L12 29"
                      ></path>
                      <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                    </svg>
                  </button> */}
                </div>
              );
            })
          ) : (
            <h3 className="m-auto">No Items Found</h3>
          )}
        </div>
        <div className=" absolute left-0 right-0 bottom-20   flex flex-row justify-between items-center bg-black text-white p-2 mx-2 my-2 rounded-md shadow-lg">
          <p>Total</p>
          <p>$ <span className="text-[#C75D68]">{totalAmount.toFixed(2)}</span></p>
        </div>

      </ div>
    </>
  );
};

export default Cartslider;
