"use client";

import DashCard from "./components/dashCard";

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

  return (
    <div>
      <DashCard title="Dashboard" />
    </div>
  );
};

export default Dashboard;
