import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import { Link } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");

    const resdata = await response.json();

    const cosmeticData = resdata.products;

    const beautyProducts = cosmeticData.filter((cosmeticData) =>
      ["beauty", "fragrances"].includes(cosmeticData.category)
    );
    // console.log(cosmeticProducts)
    console.log(cosmeticData, "DATA");
    // console only those products which category is beauty and fragrances
    console.log(beautyProducts, "Beauty Products");
    //set beauty data to state
    setData(beautyProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //

  return (

    <>
  <div className="productCards flex flex-row flex-wrap gap-4  justify-around md:p-6 md:gap-40">
    {data && data.length > 0 ? (
      data.map((items, index) => {
        return (
          <Link key={index} to={`/Productsdetails/${items.id}`}>
            <div className="card flex flex-col items-center sm:w-[300px] sm:h-[506px]  w-[250px] h-[406px]">
              <div
                className=" flex justify-center w-full h-[412px] bg-[#FFFFFF] overflow-hidden"
                style={{
                  boxShadow: "0px 4px 24px 0px #0000000D",
                }}
              >
                <img src={items.images[0]} alt="" />
              </div>
              <span className="font-light text-[12px] tracking-[2px] text-[#C75D68] mt-4 text-center">
                {items.brand}
              </span>
              <p
                className="font-normal text-[18px] text-center"
                style={{ fontFamily: "Times New Roman" }}
              >
                {items.title}
              </p>
              <span className="mt-2">${items.price}</span>
            </div>
          </Link>
        );
      })
    ) : (
      // Show skeletons when data is not loaded
      Array(10) // Change 5 to the number of skeletons you want to show
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="w-[300px] h-[506px] rounded-xl" />
            <div className=" flex flex-col items-center space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))
    )}
  </div>
</>














    // <>
    //   <div className="productCards flex flex-row flex-wrap gap-4 justify-around">
    //     {data
    //       ? data?.map((items, index) => {
    //           return (
    //             <>
    //               <Link key={index} to={`/Productsdetails/${items.id}`}>
    //                 <div className="card flex flex-col items-center w-[300px] h-[506px]">
    //                   <div
    //                     className=" flex justify-center w-full h-[412px] bg-[#FFFFFF] overflow-hidden"
    //                     style={{
    //                       boxShadow: "0px 4px 24px 0px #0000000D",
    //                     }}
    //                   >
    //                     <img src={items.images[0]} alt="" />
    //                     {/* {items.images.map((img) => {
    //               })} */}
    //                   </div>
    //                   <span className="font-light text-[12px] tracking-[2px] text-[#C75D68] mt-4 text-center">
    //                     {items.brand}
    //                   </span>
    //                   <p
    //                     className="font-normal text-[18px] text-center"
    //                     style={{ fontFamily: "Times New Roman" }}
    //                   >
    //                     {items.title}
    //                   </p>
    //                   <span className="mt-2">${items.price}</span>
    //                   {/* <Button >
    //                <ShoppingCart size={20} className="ml-3" />
    //             </Button> */}
    //                 </div>
    //               </Link>
    //             </>
    //           );
    //         })
    //       : data.map(() => {
    //           return (
    //             <div className="flex flex-col space-y-3">
    //               <Skeleton className="w-[300px] h-[506px] rounded-xl" />
    //               <div className="space-y-2">
    //                 <Skeleton className="h-4 w-[250px]" />
    //                 <Skeleton className="h-4 w-[200px]" />
    //               </div>
    //             </div>
    //           );
    //         })}
    //   </div>
    // </>
  );
};

export default Products;
