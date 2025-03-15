"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Get current active route

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); // ✅ Get the current active route

  useEffect(() => {
    setMounted(true);
    setVisible(window.scrollY === 0);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!mounted) return;

    if (typeof current === "number") {
      const previous = scrollY.getPrevious() ?? 0;
      const direction = current - previous;

      setVisible(current === 0 || direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md  z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 transition-colors duration-200",
            pathname === navItem.link
              ? "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400  to-indigo-400 font-semibold" // ✅ Gradient Active Link
              : "hover:text-indigo-500" // ✅ Hover effect
          )}
        >
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>        
        ))}
        <Link
          href="/login"
          className={cn(
            "border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] px-4 py-2 rounded-full transition-colors duration-200",
            pathname === "/login"
              ? "bg-gradient-to-r from-cyan-400 to-indigo-400 text-white border-transparent" // ✅ Active gradient
              : "text-black dark:text-white hover:bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-400 hover:text-white"
          )}
        >
          <span>Login</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
