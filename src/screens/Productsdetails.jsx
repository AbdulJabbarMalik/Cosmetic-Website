import React, { useEffect, useState } from "react";
import Navbar from "@/main/Navbar";
import { useParams } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "@/redux/slice";
import Footer from "@/main/Footer";

const Productsdetails = () => {
  const [data, setData] = useState(null);
  let [quan, setQuan] = useState(1);
  const [proimg, setProimg] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { id } = useParams();

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const resdata = await response.json();

    //set initial image
    setProimg(resdata.images[0]);
    setData(resdata);

    // const beautyProducts = cosmeticData.filter((cosmeticData) =>
    //   ["beauty", "fragrances"].includes(cosmeticData.category)
    // );
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "selected item");  

  //get acces to store data
  const cartData = useSelector((state) => state.Cart);
  console.log(cartData, "cart Data");

  const increment = () => {
    setQuan(++quan);
  };
  const decrement = () => {
    if (quan > 1) {
      setQuan(--quan);
    }
  };

  const changeImage = (img) => {
    setProimg(img);
    // console.log(image , "selected image")
  };

  return (
    <>
      <Navbar />
      <main className="mb-32">
        <div className="w-full ">
          <img className="w-full" src="/pro-page-img.svg" alt="" />
        </div>
        <div className="w-full flex flex-row flex-wrap gap-6 p-6 justify-evenly items-center">
          <div className="productimg  md:w-[400px]  
             sm:w-[350px] xl:w-[500px] h-[500px] flex flex-col gap-4 items-center p-2">
            <img
              className=" drop-shadow-2xl h-[70%] "
              src={proimg}
              alt=""
            />
            <div className="flex flex-row  py-2 gap-2 justify-center  overflow-hidden  w-full h-[25%] ">
              {data?.images.map((image) => {
                return (
                  <img
                    onClick={() => {
                      changeImage(image);
                    }}
                    className=" border cursor-pointer  object-contain w-[25%] "
                    src={image}
                  />
                );
              })}

              {/* <img className="border" src={data?.images[3]} alt="" /> */}
            </div>
          </div>
          <div className="Addtocart w-[370px] sm:w-[550px] md:w-[600px] xl:w-[700px]   flex flex-col justify-start items-start p-16 gap-4 shadow-xl">
            <h2 className=" text-[30px] sm:text-[40px] font-medium font-[Poppins]">
              {data?.title}
            </h2>
            <p>
              {data?.reviews.map(() => {
                return (
                  <>
                    <span>&#11088;</span>
                  </>
                );
              })}{" "}
              {data?.reviews.length} reviews
            </p>
            <span className="text-[#C75D68] font-semibold text-[20px] sm:text-[27px]">
              {`$${data?.price}`}
            </span>
            <p className="font-light text-[14px]">{data?.description}</p>
            <p className="flex items-center gap-2 text-[12px] sm:text-[15px]">
              {" "}
              <CircleCheck size={15} />
              {`Available ${data?.stock} products in stock`}
            </p>
            <div className="flex flex-row gap-4 justify-start  w-full">
              <div className="  sm:h-[56px] h-[45px] w-[50%] sm:w-[100px]   font-medium text-[15px] flex flex-row items-center justify-between border border-black p-1">
                <button onClick={decrement} className="h-full">
                  -
                </button>
                <span>{quan}</span>
                <button onClick={increment} className="h-full">
                  +
                </button>
              </div>
              {loading ? (
                <div class="flex flex-row gap-2  sm:h-[56px] h-[45px] w-[50%] justify-center items-center">
                  <div class="w-2 h-2 rounded-full bg-black animate-bounce"></div>
                  <div class="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:-.3s]"></div>
                  <div class="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:-.5s]"></div>
                </div>
              ) : (
                <Button
                  onClick={() => {
                    dispatch(addTocart({ data, quan }));
                    setLoading(true);

                    setTimeout(() => {
                      setLoading(false);
                    }, 2000);
                  }}
                  className="flex flex-row gap-4 sm:h-[56px] h-[45px] w-[50%] sm:w-[40%]  text-[20px] "
                >
                  <span className="sm:block hidden">Add to cart</span> <ShoppingCart size={20} />
                </Button>
              )}
            </div>
            {/* <Button className="w-[60%] h-[56px] bg-[#C75D68] rounded-none mt-4">
              BUY NOW
            </Button> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Productsdetails;
