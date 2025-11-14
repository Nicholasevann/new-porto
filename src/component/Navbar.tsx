"use client";
import React from "react";
import Link from "next/link";
import styles from "./glass.module.css";
const Navbar = () => {
  return (
    <nav
      className={`${styles.glassCard} backdrop-blur-md  px-5 w-full flex items-center py-3 fixed top-0 z-50`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="sm:block text-black text-[18px] font-bold cursor-pointer flex ">
            nicholasevann
          </p>
        </Link>

        <div className="sm:flex gap-5">
          <div
            className={`top2 ${"text-secondary"} hover:text-black text-[15px] font-bold cursor-pointer`}
          >
            <a
              href="https://drive.google.com/file/d/1114lRZOtYtT6ad3GfXZV7R4BUjmWnroZ/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
