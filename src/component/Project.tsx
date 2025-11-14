"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ChromaGrid from "./chroma-grid/ChromaGrid";
import {
  listProject,
  mobileProject,
  shopifyProject,
  webProject,
} from "@/constants";

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
    className={`cursor-pointer px-6 py-3 rounded-lg transition-all duration-300
     ${
       active
         ? "bg-gradient-to-r from-white/30 via-white/15 to-white/10 backdrop-blur-lg border border-white/30 text-white"
         : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20"
     }
    `}
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
  const [caseStudy, setCaseStudy] = useState<string>("");

  useEffect(() => {
    switch (selected) {
      case "website":
        setData(webProject);
        setCaseStudy("website");
        break;
      case "mobile":
        setData(mobileProject);
        setCaseStudy("mobile");
        break;
      case "shopify":
        setData(shopifyProject);
        setCaseStudy("shopify");
        break;
      default:
        setData(webProject);
        setCaseStudy("website");
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
                caseStudy={caseStudy}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
