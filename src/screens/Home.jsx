import Aboutsection from "@/main/Aboutsection";
import Footer from "@/main/Footer";
import Navbar from "@/main/Navbar";
import Products from "@/main/Products";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="w-full  ">
        <img className="w-full h-full object-cover" src="/homeimg.svg" alt="" />
        <div className="products1-imgs flex flex-row w-full mt-6 gap-5">
          <div className="group-img w-[420.35px] h-[192.69px]">
            <img
              className="w-full h-full object-contain"
              src="/Groupimg1.svg"
              alt=""
            />
          </div>
          <div className="group-img w-[420.35px] h-[192.69px]">
            <img
              className="w-full h-full object-contain"
              src="/Groupimg2.svg"
              alt=""
            />
          </div>
          <div className="group-img w-[420.35px] h-[192.69px]">
            <img
              className="w-full h-full object-contain"
              src="/Groupimg3.svg"
              alt=""
            />
          </div>
          <div className="group-img w-[420.35px] h-[192.69px]">
            <img
              className="w-full h-full object-contain"
              src="/Groupimg4.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-20 mt-20">
          <div>
            <img src="/form-editor-pick-collection.svg" alt="" />
          </div>
          <div className="Products-container w-full">
            <Products />
          </div>
        </div>

        <div className="w-full pt-28 pb-28">
          <div className=" bar-img w-full h-[200px]  flex flex-row justify-evenly items-center">
            <img src="/Logoipsum.svg" alt="" />
            <img src="/logoipsum2.svg" alt="" />
            <img src="/Logoipsum3.svg" alt="" />
            <img src="/Logoipsum4.svg" alt="" />
            <img src="/logoipsum5.svg" alt="" />
          </div>
        </div>

        <section className="about-us mt-24 pb-20">
          <Aboutsection/>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Home;
