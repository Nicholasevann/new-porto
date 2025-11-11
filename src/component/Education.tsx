"use client";
import React from "react";
import { motion } from "framer-motion";
import { educations } from "../constants";
import Image, { StaticImageData } from "next/image";
import stylesGlass from "./glass.module.css";
import stylesGlassWhite from "./glass-white.module.css";
// Dummy styles object if not imported elsewhere
const styles = {
  padding: "p-8",
  sectionSubText: "text-white text-lg mb-2",
  sectionHeadText: "text-3xl font-bold text-white text-center",
};

type EducationCardProps = {
  index: number;
  branch: string;
  marks: string;
  name: string;
  degree: string;
  year: string;
  image: StaticImageData;
};

const EducationCard: React.FC<EducationCardProps> = ({
  branch,
  marks,
  name,
  degree,
  year,
  image,
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className={` p-6 flex flex-col rounded-3xl w-full space-y-4 bg-black/80 backdrop-blur-md`}
  >
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={`education-${name}`}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <div className="text-center">
        <p className="text-white font-medium text-lg blue-text-gradient">
          {name}
        </p>
        <p className="text-secondary text-sm mt-1">{year}</p>
      </div>
    </div>

    <div className="text-center space-y-3">
      <p className="text-white tracking-wider text-xl font-semibold">
        {degree}
      </p>
      <p className="pink-text-gradient text-base">{branch}</p>
      <p className="green-text-gradient text-base">{marks}</p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="p-10 lg:p-20">
      <div
        className={`rounded-[20px] max-w-[1440px] mx-auto ${stylesGlassWhite.glassCard}`}
        id="education"
      >
        <div className={`rounded-2xl ${styles.padding} `}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className={styles.sectionHeadText}>Education</h2>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pb-14">
          {educations.map((education, index) => (
            <EducationCard key={education.name} index={index} {...education} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
