import React from "react";
import Menu from "./Menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-12 text-orange-500 p-4 flex items-center justify-between border-b-2 border-b-orange-500 uppercase">
      {/* Logo */}
      <div className="text-xl">
        <Link href="/">Ristorante Italiano</Link>
      </div>
      {/* Mobile menu */}
      <div>
        <Menu />
      </div>
    </div>
  );
}
