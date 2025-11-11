"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./Experience.css"; // added

import { experiences } from "../constants";

interface ExperienceType {
  title: string;
  company_name: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        color: "#fff", // text color stays white
        background: "transparent", // actual glass styling moved to CSS
        backdropFilter: "none",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255,255,255,0.6)",
      }}
      date={experience.date}
      iconStyle={{
        background: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(10px)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {index + 1}
        </div>
      }
      className="vtl-element" // optional hook for targeting
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => setIsMobile(window.innerWidth <= 768), [isMobile]);
  return (
    <>
      <motion.div id="experience" className="p-20 max-w-[1440px] mx-auto">
        <p className={` text-white text-xl`}>What I have done so far</p>
        <h2 className={`$ text-white text-5xl font-bold`}>Work Experience.</h2>
      </motion.div>

      <div className="flex flex-col pb-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
