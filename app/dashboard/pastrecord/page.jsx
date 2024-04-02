"use client";
import React, { useEffect, useState } from "react";
import DashCard from "../components/dashCard";

export default function PastRecord() {
  const [records, setRecords] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(
      `https://tele.syscomatic.com/api/v1/uplaodfile/fetchPaitentUploadsById/${1234444}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecords(data?.data); // Assuming the API response is an array of records
      })
      .catch((error) => {
        console.error("Error fetching past records:", error);
      });
  }, []);

  const handleSeeAll = () => {
    setShowAll(true);
  };

  return (
    <section>
      <DashCard title="Past Record" />

      <div className="mx-5 mt-10">
        <div className="flex ">
          <button
            onClick={handleSeeAll}
            className="flex flex-row ml-auto items-center justify-center min-w-[130px] px-4 rounded-full font-medium border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[#5d956dbe] text-white  tracking-wide border-transparent py-1.5 h-[38px]"
          >
            See All
          </button>
        </div>

        <div className=" mx-auto mt-24 flex flex-col gap-y-5">
          {records.slice(0, showAll ? records.length : 2).map((record, index) => (
            <div
              key={index}
              className=" bg-[#5d956d46] gap-y-2 hover:shadow-lg duration-500 border rounded-xl overflow-hidden items-center justify-between px-10 py-5"
            >
              <div className="flex flex-col ">
                <p className="text-gray-500 mb-3">
                  Date: <span className="text-gray-900">{record?.date}</span>
                </p>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique accusantium error aut asperiores velit excepturi
                  eligendi magni ipsa exercitationem minima, hic molestiae iste
                  ducimus assumenda dolor. Facilis porro officia voluptatibus.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique accusantium error aut asperiores velit excepturi
                  eligendi magni ipsa exercitationem minima, hic molestiae iste
                  ducimus assumenda dolor. Facilis porro officia voluptatibus.
                </p>
                <p className="text-gray-500">
                  Patient ID:{" "}
                  <span className="text-gray-900">{record?.paitentId}</span>
                </p>
                <a
                  href={record?.FileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
