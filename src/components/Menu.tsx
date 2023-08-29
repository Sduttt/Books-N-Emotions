"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, href: "/", label: "Homepage" },
  { id: 2, href: "/menu", label: "Menu" },
  { id: 3, href: "/contact", label: "Contact" },
];
const user: Boolean = true;

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="cursor-pointer">
      {open ? (
        <RiCloseFill onClick={() => setOpen(false)} />
      ) : (
        <RiMenu3Line onClick={() => setOpen(true)} />
      )}
      {open && (
        <div className="bg-red-500 text-white h-[calc(100vh-6rem)] absolute left-0 top-24 w-full flex flex-col items-center justify-center z-10">
          {links.map((link) => (
            <Link href={link.href} key={link.id} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          {user ? (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
