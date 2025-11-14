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
import { getDriveImages } from "@/constants/getDriveImages";
import { StaticImageData } from "next/image";

const API_KEY = "AIzaSyALn1intEk8tYJgJQG5GVXcmQzWe2aMNG4";

type ProjectItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string | StaticImageData;
  borderColor: string;
  url?: string;
  tags: string[];
  folderId?: string;
  images: string[];
  video?: string;
};

const getProjectsWithImages = async (
  projects: ProjectItem[]
): Promise<ProjectItem[]> => {
  return await Promise.all(
    projects.map(async (project) => {
      if (project.folderId) {
        try {
          const images = await getDriveImages(project.folderId, API_KEY);
          return { ...project, images };
        } catch {
          return { ...project, images: [] };
        }
      }
      return project;
    })
  );
};

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

const Project = () => {
  const [selected, setSelected] = useState<string>("website");
  const [data, setData] = useState<ProjectItem[]>(webProject as ProjectItem[]);
  const [caseStudy, setCaseStudy] = useState<string>("website");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchData = async () => {
      let projects: ProjectItem[];
      switch (selected) {
        case "website":
          projects = webProject as ProjectItem[];
          setCaseStudy("website");
          break;
        case "mobile":
          projects = mobileProject as ProjectItem[];
          setCaseStudy("mobile");
          break;
        case "shopify":
          projects = shopifyProject as ProjectItem[];
          setCaseStudy("shopify");
          break;
        default:
          projects = webProject as ProjectItem[];
          setCaseStudy("website");
      }
      const projectsWithImages = await getProjectsWithImages(projects);
      if (isMounted) {
        setData(projectsWithImages);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
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
              {loading ? (
                <div className="text-white text-center py-12">
                  Loading projects...
                </div>
              ) : (
                <ChromaGrid
                  items={data}
                  radius={300}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                  caseStudy={caseStudy}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
