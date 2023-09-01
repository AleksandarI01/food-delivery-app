import Link from "next/link";
import React from "react";
import { BsCart4 } from "react-icons/bs";

const styleCart = { fontSize: "28", color: "white", cursor: "pointer" };

export default function CartInMenu() {
  return (
    <Link href="/cart" className="flex items-center justify-center gap-4">
      <BsCart4 style={styleCart} />
      <span>Cart (2)</span>
    </Link>
  );
}
