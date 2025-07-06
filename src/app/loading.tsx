"use client";
import React from "react";

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-40 border-b-4"></div>
      <span className="mt-6 text-white text-lg font-mono tracking-widest">
        Loading...
      </span>
    </div>
  </div>
);

export default Loading;
