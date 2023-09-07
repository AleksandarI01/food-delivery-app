import Image from "next/image";
import React from "react";
import Countdown from "./Countdown";

export default function Offer() {
  return (
    <section className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offer/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Meals Delivered To You
        </h1>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisici elit, Lorem ipsum
          dolor sit amet, consectetur adipisici elit, Lorem ipsum dolor sit
          amet, consectetur adipisici elit, Lorem ipsum dolor sit amet,
          consectetur adipisici elit.
        </p>
        <Countdown />
        <button className="bg-orange-500 text-white rounded-md py-3 px-6">
          Order Now!
        </button>
      </div>
      <div className="flex-1 w-full relative md:h-full">
        <Image
          src="/offer/offerImg.jpg"
          alt="food offer image"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
