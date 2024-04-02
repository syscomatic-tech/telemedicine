"use client";import React, { useEffect, useState } from "react";
import DashCard from "../components/dashCard";

export default function ViewAppointment() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Retrieve appointment data from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem("booking"));
    if (storedAppointments) {
      setAppointments(storedAppointments);
    }
  }, []);

  console.log(appointments);

  return (
    <section>
      <DashCard title="View Appointment" />
      <div className="mx-5 mt-10">
        <div className="max-w-2xl mx-auto mt-24">
          {/* {appointments?.map((appointment, index) => ( */}
            <div  className="flex gap-3 bg-[#EDEEEE] hover:shadow-xl duration-500 border rounded-xl overflow-hidden items-center justify-between px-5 md:px-10 py-5 mb-3">
              <div className="flex flex-col ">
                <p className="text-gray-500 mb-3">
                  Date: <span className="text-gray-900">{appointments.date}</span>
                </p>
                <p className="text-gray-500">
                  Doctor Name:{" "}
                  <span className="text-gray-900">{appointments.doctorName}</span>
                </p>
                <p className="text-gray-500">
                  Specialist: <span className="text-gray-900">{appointments.specialist}</span>
                </p>
                <p className="text-gray-500">
                  Time: <span className="text-gray-900">{appointments.time}</span>
                </p>
              </div>

              <div>
                <button className="bg-[#5d956dbe] py-1 md:py-2 px-2 md:px-3 rounded-full text-white text-sm md:text-md">
                  Join Now
                </button>
              </div>
            </div>
          {/* ))} */}
        </div>
      </div>
    </section>
  );
}
