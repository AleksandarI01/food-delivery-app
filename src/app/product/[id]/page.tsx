import Image from "next/image";
import React from "react";
import { singleProduct } from "@/data";

export default function SingleProduct() {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-orange-500 md:flex-row">
      {singleProduct.img && (
        <div className="relative">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      <div className="">
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
      </div>
    </div>
  );
}
