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
      name: "Login",
      link: "/login",
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
