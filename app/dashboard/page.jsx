"use client";

import React, { useEffect } from "react";
import DashCard from "./components/dashCard";
import useProtectAuth from "../hooks/useProtectAuth";

const Dashboard = () => {

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const { localStorage } = window;
  //     const guard = localStorage.getItem("token");
  //     if (!guard && !user) {
  //       router.push("/authentication/signin");
  //     }
  //   }
  // }, []);
  useProtectAuth();

  return (
    <div>
      <DashCard title="Dashboard" />
    </div>
  );
};

export default Dashboard;
