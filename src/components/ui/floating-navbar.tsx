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
  const [visible, setVisible] = useState(true); // ✅ Initialize as true to prevent mismatch
  const [mounted, setMounted] = useState(false); // ✅ Track mounting to prevent hydration error

  // ✅ Run only after the component is mounted (client-side)
  useEffect(() => {
    setMounted(true);
    setVisible(window.scrollY === 0);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!mounted) return; // ✅ Prevent updates before mounting

    if (typeof current === "number") {
      const previous = scrollY.getPrevious() ?? 0;
      const direction = current - previous;

      if (current === 0) {
        // If user reaches the top of the page, always show navbar
        setVisible(true);
      } else {
        setVisible(direction < 0); // Show on scroll up, hide on scroll down
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Link
          href="/login"
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>Login</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
