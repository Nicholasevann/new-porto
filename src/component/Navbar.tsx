"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className={`px-5 w-full flex items-center py-3 fixed top-0 z-20 bg-black/80
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="sm:block text-white text-[18px] font-bold cursor-pointer flex ">
            nicholasevann
          </p>
        </Link>

        <div className="sm:flex gap-5">
          <div
            className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer`}
          >
            <a
              href="https://drive.google.com/file/d/1zIrmM5SmGkEqYfi2hbf_u-sQSnxDtQ4S/view?usp=drive_link"
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
