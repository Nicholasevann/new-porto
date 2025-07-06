"use client";
import React from "react";
import ProfileCard from "./profile-card/ProfileCard";
import { useRouter } from "next/navigation";

const AboutMe: React.FC = () => {
  const router = useRouter();
  return (
    <section
      className="w-full min-h-[70vh] flex items-center justify-center bg-black text-white py-12 px-4"
      id="about"
    >
      <div className="max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Profile Card */}
        <div className="flex justify-center pt-2">
          <ProfileCard
            name="Nicholas Evan L"
            title="Fullstack Developer"
            handle="nicholasevann"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/logo.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => {
              router.push("/#contact");
            }}
          />
        </div>
        {/* Right Side: About Me Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-white text-lg mb-4">
            Hi! I&apos;m Nicholas Lindartono, a dedicated Frontend & Mobile
            Developer with a strong passion for crafting seamless and dynamic
            digital experiences. With years of experience in React JS, Flutter,
            and Next JS, I’ve built websites and apps that not only look good
            but perform exceptionally well.
          </p>
          <p className="text-white text-lg">
            From landing pages to complex mobile applications, I’ve led and
            delivered projects across various industries—always staying ahead by
            adopting the latest web technologies. I thrive on solving real-world
            problems, working in teams, and constantly learning to create
            user-focused solutions that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
