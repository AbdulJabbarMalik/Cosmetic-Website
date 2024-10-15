// import Navbar from "@/main/Navbar";
// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useSelector } from "react-redux";

// const Cart = () => {
//   const cartData = useSelector((state) => state.Cart.cart);

//   const totalAmount = cartData.reduce((total, item) => {
//     return total + item.data.price * item.quan;
//   }, 0);
 
//   return (
//     <>
//       <Navbar />
//       <main className=" w-full h-screen flex flex-row justify-center mt-8">
//         <Table>
//           <TableCaption>Your Items List</TableCaption>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-[10px]">Item</TableHead>
//               <TableHead className="w-[40%]">Title</TableHead>
//               <TableHead className="w-[20%]">Brand</TableHead>
//               {/* <TableHead>Description</TableHead> */}
//               <TableHead >Quantity</TableHead>
//               <TableHead className="text-right w-[20%]">Price</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {cartData.map((items) => (
//               <TableRow key={items.data.title}>
//                 <TableCell className="border w-[5px]">
//                   <img src={items.data.thumbnail} alt="" />
//                 </TableCell>
//                 <TableCell className="font-medium w-[30px] text-center">
//                   {items.data.title}
//                 </TableCell>
//                 <TableCell className="w-[30px] text-center border">
//                   {items.data.brand}
//                 </TableCell>
//                 {/* <TableCell className="border w-[500px]">
//                   {items.data.description}
//                 </TableCell> */}
//                 <TableCell className="border text-center w-[20px]">
//                   {items.quan}
//                 </TableCell>
//                 <TableCell className="text-right w-[30px]">
//                   ${(items.data.price * items.quan).toFixed(2)}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//           <TableFooter>
//             <TableRow>
//               <TableCell colSpan={4}>Total</TableCell>
//               <TableCell className="text-right border ">${totalAmount.toFixed(2)}</TableCell>
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </main>
//     </>
//   );
// };

// export default Cart;
