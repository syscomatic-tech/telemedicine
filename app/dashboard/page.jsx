"use client";

import { useEffect, useState } from "react";
import DashCard from "./components/dashCard";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { localStorage } = window;
      const guard = localStorage.getItem("token");
      if (!guard) {
        router.push("/authentication/signin");
      }
    }

    const fetchData = async () => {
      try {
        const response = await fetch("https://tele.syscomatic.com/api/v1/user/getAllUser");
        const data = await response.json();
        setUserData(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   if (userData) {
  //     createChart("chart1", [1, 6, 1, 3, 5, 4, 7], "rgba(101, 116, 205, 0.1)", "rgba(101, 116, 205, 0.8)");
  //     createChart("chart2", [2, 3, 2, 9, 7, 7, 4], "rgba(246, 109, 155, 0.1)", "rgba(246, 109, 155, 0.8)");
  //     createChart("chart3", [5, 5, 9, 3, 2, 6, 7], "rgba(246, 153, 63, 0.1)", "rgba(246, 153, 63, 0.8)");
  //   }
  // }, [userData]);

  // const createChart = (id, data, backgroundColor, borderColor) => {
  //   const ctx = document.getElementById(id).getContext('2d');
  
  //   // Destroy existing chart instance if it exists
  //   if (window.chartRefs && window.chartRefs[id]) {
  //     window.chartRefs[id].destroy();
  //   }
  
  //   // Create new chart instance
  //   window.chartRefs = window.chartRefs || {};
  //   window.chartRefs[id] = new Chart(ctx, {
  //     type: "line",
  //     data: {
  //       labels: data,
  //       datasets: [
  //         {
  //           backgroundColor: backgroundColor,
  //           borderColor: borderColor,
  //           borderWidth: 2,
  //           data: data,
  //         },
  //       ],
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       legend: {
  //         display: false,
  //       },
  //       tooltips: {
  //         enabled: false,
  //       },
  //       elements: {
  //         point: {
  //           radius: 0
  //         },
  //       },
  //       scales: {
  //         xAxes: [{
  //           gridLines: false,
  //           scaleLabel: false,
  //           ticks: {
  //             display: false
  //           }
  //         }],
  //         yAxes: [{
  //           gridLines: false,
  //           scaleLabel: false,
  //           ticks: {
  //             display: false,
  //             suggestedMin: 0,
  //             suggestedMax: 10
  //           }
  //         }]
  //       }
  //     }
  //   });
  // };
  

  // Calculate lengths of roles if userData is not null
  const adminLength = userData ? userData.filter(user => user.role === 'AD').length : 0;
  const doctorLength = userData ? userData.filter(user => user.role === 'DC').length : 0;
  const patientLength = userData ? userData.filter(user => user.role === 'PT').length : 0;

  return (
    <main>
      <DashCard title="Dashboard" />

      <div className="min-w-screen mt-20 flex items-center justify-center px-5 py-5">
        <div className="w-full max-w-3xl">
          <div className="-mx-2 md:flex">
            <div className="w-full md:w-1/3 px-2">
              <div className="rounded-lg shadow-sm mb-4">
                <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                  <div className="px-3 pt-8 pb-10 text-center relative z-10">
                    <h4 className="text-sm uppercase text-gray-500 leading-tight">Admin</h4>
                    <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                      {adminLength}
                    </h3>
                    {/* <p className="text-xs text-green-500 leading-tight">▲</p> */}
                  </div>
                  {/* <div className="absolute bottom-0 inset-x-0">
                    <canvas id="chart1" height="70"></canvas>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <div className="rounded-lg shadow-sm mb-4">
                <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                  <div className="px-3 pt-8 pb-10 text-center relative z-10">
                    <h4 className="text-sm uppercase text-gray-500 leading-tight">Doctor</h4>
                    <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                      {doctorLength}
                    </h3>
                    {/* <p className="text-xs text-red-500 leading-tight">▼</p> */}
                  </div>
                  {/* <div className="absolute bottom-0 inset-x-0">
                    <canvas id="chart2" height="70"></canvas>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <div className="rounded-lg shadow-sm mb-4">
                <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                  <div className="px-3 pt-8 pb-10 text-center relative z-10">
                    <h4 className="text-sm uppercase text-gray-500 leading-tight">Patient</h4>
                    <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                      {patientLength}
                    </h3>
                    {/* <p className="text-xs text-green-500 leading-tight">▲</p> */}
                  </div>
                  {/* <div className="absolute bottom-0 inset-x-0">
                    <canvas id="chart3" height="70"></canvas>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </main>
  );
};

export default Dashboard;
