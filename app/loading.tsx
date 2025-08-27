"use client";

import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <FaSpinner className="animate-spin text-5xl mb-4 text-blue-500" />
      <p className="text-lg font-medium">Loading...</p>
    </div>
  );
}
