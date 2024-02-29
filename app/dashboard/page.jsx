"use client";
import { UserAuth } from "@/components/authprovider/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import DashCard from "./components/dashCard";

const Dashboard = () => {
  const router = useRouter();
  const { user } = UserAuth();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { localStorage } = window;
      const guard = localStorage.getItem("token");
      if (!guard && !user) {
        router.push("/authentication/signin");
      }
    }
  }, []);

  useEffect;
  return (
    <div>
      <DashCard title="Dashboard" />
    </div>
  );
};

export default Dashboard;
