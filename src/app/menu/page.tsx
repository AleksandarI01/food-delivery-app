import React from "react";
import Link from "next/link";
import { menu } from "@/data";

export default function MenuPage() {
  return (
    <section className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="group w-full h-1/3 bg-cover p-8 md:h-1/2 hover:scale-105 hover:rounded-md transition-all"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className={`text-${item.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl group-hover:text-orange-500 transition">
              {item.title}
            </h1>
            <p className="text-sm my-8">{item.desc}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
