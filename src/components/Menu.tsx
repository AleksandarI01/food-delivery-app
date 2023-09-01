"use client";

import Link from "next/link";
import React, { useState } from "react";
// import Image from "next/image";
import { CgMenu } from "react-icons/cg";
import { MdRestaurantMenu } from "react-icons/md";
import CartInMenu from "./CartInMenu";

const styleMenu = { fontSize: "32", color: "orange", cursor: "pointer" };

const menuLinks = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  // temporary user
  const user = false;

  return (
    <div>
      {!open ? (
        <CgMenu style={styleMenu} onClick={() => setOpen(true)} />
      ) : (
        <MdRestaurantMenu style={styleMenu} onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className="bg-orange-500 text-white text-3xl absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center z-10">
          {menuLinks.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartInMenu />
          </Link>
        </div>
      )}
    </div>
  );
}
