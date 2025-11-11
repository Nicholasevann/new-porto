"use client";
import React from "react";
import ProfileCard from "./profile-card/ProfileCard";
import { useRouter } from "next/navigation";

const AboutMe: React.FC = () => {
  const router = useRouter();
  return (
    <section
      className="w-full min-h-[70vh] flex items-center justify-center bg-black text-white p-10 lg:p-20"
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
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-white text-lg mb-8">
            Hi! I&apos;m Nicholas Lindartono — a Fullstack Website & Mobile
            Developer. I build high-quality web and mobile applications using
            Next.js, React.js, Vue.js, React Native, Flutter, and backend
            technologies like Flask, Nest JS, and Express JS. I also build
            e-commerce sites with Shopify.
          </p>
          <p className="text-white text-lg">
            I deliver production-ready solutions with a focus on performance,
            accessibility and maintainability — working across frontend, backend
            and mobile to ship complete, professional products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
