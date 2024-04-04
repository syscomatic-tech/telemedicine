"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Role() {
  const [userType, setUserType] = useState("");
  const router = useRouter();

  const handleUserTypes = (type) => {
    setUserType(type);
    localStorage.setItem("role", type);
    // Redirect to the next page
    router.push(`/authentication/signup`);
  };

  return (
    <main>
      <h1 className="font-semibold text-4xl text-slate-400 text-center mt-[25vh]">
        User Types
      </h1>
      <div className="flex justify-center content-center mt-10">
        <button
          onClick={() => handleUserTypes("PT")}
          className="bg-[#5d956dbe] hover:bg-[#5d956da2] hover:shadow-lg text-white duration-500 rounded-full px-3 py-1 text-2xl"
        >
          Patient
        </button>
        <button
          onClick={() => handleUserTypes("DC")}
          className="bg-[#5d956dbe] marker:hover:bg-[#5d956da2] hover:shadow-lg text-white duration-500 rounded-full px-3 py-1 text-2xl mx-5"
        >
          Doctor
        </button>
        <button
          onClick={() => handleUserTypes("AM")}
          className="bg-[#5d956dbe] hover:bg-[#5d956da2] hover:shadow-lg text-white duration-500 rounded-full px-3 py-1 text-2xl"
        >
          Admin
        </button>
      </div>
    </main>
  );
}
