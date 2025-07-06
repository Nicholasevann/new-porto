"use client";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsPerson, BsPersonWorkspace } from "react-icons/bs";

const ContentNavigation = () => {
  const [activeNav, setActiveNav] = useState("#");

  const handleNavClick = (hash: string) => {
    setActiveNav(hash);
    // Optionally scroll to section smoothly
    if (hash !== "#") {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="nav z-50 flex gap-4 fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/80 rounded-full px-6 py-3 shadow-lg">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#");
        }}
        className={activeNav === "#" ? "active text-white" : "text-gray-400"}
        aria-label="Home"
      >
        <AiOutlineHome size={24} />
      </a>
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#about");
        }}
        className={
          activeNav === "#about" ? "active text-white" : "text-gray-400"
        }
        aria-label="about"
      >
        <BsPerson size={24} />
      </a>
      <a
        href="#education"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#education");
        }}
        className={
          activeNav === "#education" ? "active text-white" : "text-gray-400"
        }
        aria-label="Education"
      >
        <BiBook size={24} />
      </a>
      <a
        href="#project"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#project");
        }}
        className={
          activeNav === "#project" ? "active text-white" : "text-gray-400"
        }
        aria-label="Projects"
      >
        <AiOutlineFundProjectionScreen size={24} />
      </a>
      <a
        href="#experience"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#experience");
        }}
        className={
          activeNav === "#experience" ? "active text-white" : "text-gray-400"
        }
        aria-label="Experience"
      >
        <BsPersonWorkspace size={24} />
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#contact");
        }}
        className={
          activeNav === "#contact" ? "active text-white" : "text-gray-400"
        }
        aria-label="Contact"
      >
        <MdMessage size={24} />
      </a>
    </nav>
  );
};

export default ContentNavigation;
