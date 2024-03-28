"use client";

import { useEffect } from "react";
import DashCard from "./components/dashCard";
import { useRouter } from "next/navigation";

const Dashboard = () => {

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { localStorage } = window;
      const guard = localStorage.getItem("token");
      if (!guard) {
        router.push("/authentication/signin");
      }
    }
  }, []);

  return (
    <div>
      <DashCard title="Dashboard" />
    </div>
  );
};

export default Dashboard;
