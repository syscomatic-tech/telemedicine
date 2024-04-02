"use client";
import React, { useEffect, useState } from "react";
import DashCard from "../components/dashCard";

export default function ViewTestResult() {
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    fetch("https://tele.syscomatic.com/api/v1/viewTestresult/alltestresults")
      .then((response) => response.json())
      .then((data) => {
        setTestResults(data);
      })
      .catch((error) => {
        console.error("Error fetching test results:", error);
      });
  }, []);

  // Function to determine the status color
  function getStatusColor(status) {
    switch (status) {
      case "done":
        return "bg-green-200";
      case "pending":
        return "bg-yellow-300";
      case "block":
        return "bg-red-200";
      default:
        return "";
    }
  }

  return (
    <section>
      <DashCard title="View Test Result" />
      <div className="mx-5 mt-10">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <table className="w-full border-collapse border mx-auto">
            <thead>
              <tr className="bg-[#5d956d46] text-slate-600">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Result</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((testResult, index) => (
                <tr key={index} className="bg-white border-b border-">
                  <td className="py-2 px-4">
                    <input
                      className="border-none focus:outline-none"
                      value={testResult?.name}
                      type="text"
                    />
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`text-sm rounded-full px-2 py-1 ${getStatusColor(
                        testResult?.status
                      )}`}
                    >
                      {testResult.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-lg">
                    <input
                      className="border-none focus:outline-none"
                      value={testResult?.result}
                      type="text"
                    />
                  </td>
                  <td className="py-2 px-4 text-lg">
                    {" "}
                    <input
                      className="border-none focus:outline-none"
                      value={testResult?.date}
                      type="text"
                    />{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
