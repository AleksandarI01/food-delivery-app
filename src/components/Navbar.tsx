import React from "react";
import Link from "next/link";

import Menu from "./Menu";
import CartInMenu from "./CartInMenu";

import { AiFillPhone } from "react-icons/ai";

export default function Navbar() {
  const phoneStyle = { color: "white" };
  // temporary user
  const user = false;

  return (
    <div className="h-12 text-orange-500 p-4 flex items-center justify-between border-b-2 border-b-orange-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* for MD displays */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Ristorante Italiano</Link>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* for MD displays */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <AiFillPhone style={phoneStyle} />
          <span>+41 076 123 56 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <div>
          <CartInMenu />
        </div>
      </div>
    </div>
  );
}
