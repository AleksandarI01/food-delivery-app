import Image from "next/image";
import React from "react";

export default function CartPage() {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-orange-500 lg:flex-row">
      {/* Products section */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* temporary item  */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/pizzas/pizza7.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">CHF 49.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* temporary item  */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/pizzas/pizza7.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">CHF 49.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* temporary item  */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/pizzas/pizza7.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">CHF 49.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>

      {/* Payment section */}
      <div className="h-1/2 p-4 bg-orange-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">CHF 53.90</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">CHF 0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">Total cost</span>
          <span className="font-bold">CHF 100.00</span>
        </div>
        <button className="uppercase bg-orange-500 text-white p-3 rounded-md w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
}
