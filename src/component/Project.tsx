"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ChromaGrid from "./chroma-grid/ChromaGrid";
import { listProject, mobileProject, webProject } from "@/constants";

// ProjectList Component
const ProjectList = ({
  title,
  active,
  setSelected,
  id,
}: {
  title: string;
  active: boolean;
  setSelected: (id: string) => void;
  id: string;
}) => (
  <motion.li
    className={`cursor-pointer px-6 py-3 rounded-lg transition-all duration-300 ${
      active
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
    }`}
    onClick={() => setSelected(id)}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="font-medium">{title}</span>
  </motion.li>
);

// Main Project Component
const Project = () => {
  const [selected, setSelected] = useState<string>("website");
  const [data, setData] = useState<typeof webProject>(webProject);

  useEffect(() => {
    switch (selected) {
      case "website":
        setData(webProject);
        break;
      case "mobile":
        setData(mobileProject);
        break;
      default:
        setData(webProject);
    }
  }, [selected]);

  return (
    <section className="w-full min-h-screen bg-black py-12 px-4" id="project">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            My Projects.
          </h2>
        </motion.div>

        <div className="project w-full flex flex-col">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-3"
          >
            <div className="flex justify-center mb-8">
              <ul className="flex flex-wrap gap-4">
                {listProject.map((item, index) => (
                  <ProjectList
                    key={index}
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                  />
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <ChromaGrid
                items={data}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
