"use client";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BiLinkAlt } from "react-icons/bi";
import GridMotion from "./grid-motion/GridMotion";
import styles from "./glass.module.css";

// note: you'll need to make sure the parent container of this component is sized properly
const items = [
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Dashboard-Detail-A03sYf8jCCbChxzPMyU2q6dDCnTz4P.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Dental-Examination-34bkHwx7qcP3SU8d0ZYcZAtcMjwjj7.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/General%20Ledger%20Report-aNbo9TUR0xTOEBn0a3PfKKUBJr6ro7.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Jurnal-vFTWpfDC02BHVgvbiyD1CvAlxEbmC5.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/bone-home-RbYj78fmvAzUTlpPFEv3PoK3cU3bmG.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/kclub-home-wgn98ZmWpXWirznFocGbTcXdpEdf8K.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/kclub-project-F0jLtJjdI5bGgqjFsgFpTe6Q7CZEZE.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/kopkar-XkTNbJx471SWBfPQgX57aKS7AwoXoW.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/massai-home-4lYj9CFJYyv4P6eWr3xDKw3Xw8YvWt.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/ruscargo-i3Aww6ahhVI2RfzsOzlYEMGkeSdrBI.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/plural-SWlrng6H1uBm98ROv583LBUCmqfwE6.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/poscafe-cpXsyz9YWjHpx75LH4VbILJyIsor2L.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/massai-table-X02912BtSGGMLMM1js6QRU1dwhirTi.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Recipe-51PqRfVUIoOspd1FyIlVTI5MMxnb2C.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Stock-xtRKcNZUSOtpD21fBsTP5PM91s0GgF.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Dashboard-Detail-GZiA43To6KxeqCIKz8dhxu9s6yajl2.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/tomas-driver-m6gGXWNgpxNvLNrYFD3U3rCNRfkoX8.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Registration-vwXuMi2lJi1TEytiQZIxuwSo1VYwYv.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/tomas-user-QfAAmXr6DygSyN7qchp88hocGLZU1R.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/About-aJmhlBprLbdTyvOLN6eZJ9L6GjuquX.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Expertise-8rWEmqOJRZju68Ze6ByVYGC5S7RDKe.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Regions-HJnWD24wTagMIYIGVjFR8Khm2k0Y2U.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/About-4uR7uuVcJO1FMh7qTU9tNMWE66FpIe.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Courses-o4MePAcqzduVRjCu5u2r7MhvvBD7z6.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Home-qs39dEpUKur7okzdeCh0AcYY8ELAGU.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Login-jFRtO0hRiVQyYEkkODAazFuDyH6ove.png",
  "https://d15dqoqu1cwclwvz.public.blob.vercel-storage.com/Play-Simulation-rdritgJ1PfOLx9iapwM4kcr1oIhEjd.png",
];

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
        <GridMotion items={items} />
        <div
          className={`head1 h-screen items-center  max-w-7xl mx-auto  flex flex-row gap-5 z-10 p-5`}
        >
          <div
            className={`head2 ${styles.glassCard} backdrop-blur-md  rounded-lg p-10 pb-20 z-20`}
          >
            <h1 className={` text-black text-5xl`}>
              Hi there, I&apos;m{" "}
              <p className="name text-black">Nicholas Evan</p>
            </h1>
            <h2 className="text-xl my-5">
              Fullstack Website & Mobile Developer
            </h2>

            <div className="absolute flex flex-row gap-10">
              <a href="https://github.com/Nicholasevann" target="_blank">
                <AiOutlineGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/nicholasevanlin/"
                target="_blank"
              >
                <ImLinkedin size={40} />
              </a>
              <a
                href="https://drive.google.com/drive/folders/1dHFLf45w9DxxEObxUbc6xSW0jysj8wlM?usp=sharing"
                target="_blank"
              >
                <BiLinkAlt size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
