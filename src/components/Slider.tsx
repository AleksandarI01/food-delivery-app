"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const sliderData = [
  {
    id: 1,
    title: "enjoy meals with friends",
    image: "/slider1.jpg",
  },
  {
    id: 2,
    title: "100% fresh ingredients",
    image: "/slider2.jpg",
  },
  {
    id: 3,
    title: "order now! Have fun with friends!",
    image: "/slider3.jpg",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) =>
  //         prev === sliderData.length - 1 ? 0 : prev + 1
  //       ),
  //     2000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-orange-50">
      <div className="flex flex-1 items-center justify-center flex-col gap-8 text-orange-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {sliderData[currentSlide].title}
        </h1>
        <button className="bg-orange-500 text-white py-4 px-8">
          Order Now!
        </button>
      </div>
      <div className="w-full flex-1 relative">
        <Image
          src={sliderData[currentSlide].image}
          alt="slider image"
          fill
          className="object-cover"
        ></Image>
      </div>
    </section>
  );
}
