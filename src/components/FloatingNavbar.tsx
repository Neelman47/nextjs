"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export default function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Contact us",
      link: "/contact",
    },
    {
      name: "Signup",
      link: "/signup",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
