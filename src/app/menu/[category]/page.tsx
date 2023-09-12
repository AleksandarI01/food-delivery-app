import React from "react";
import Link from "next/link";
import { pizzas } from "@/data";
import Image from "next/image";

export default function CategoryPage() {
  return (
    <section className="flex flex-wrap text-orange-50">
      {pizzas.map((item) => (
        <Link
          className="group w-full h-[60vh] border-r-2 border-b-2 border-orange-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between odd:bg-orange-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt={`image of ${item.title}`}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-orange-500 text-2xl uppercase p-2">
              {item.title}
            </h1>
            <h2 className="text-orange-500 group-hover:hidden text-xl">
              CHF {item.price}
            </h2>
            <button className="hidden group-hover:block uppercase bg-orange-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
}
