"use client";
import React, { useEffect, useState } from "react";
import DashCard from "../components/dashCard";
import AppointmentCard from "./appointmentcard";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const doctorId = localStorage.getItem("userId");
    fetch(`https://tele.syscomatic.com/api/v1/schedule/fetchDoctorScheduleById/${doctorId}`)
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data); // Assuming the API response is an array of appointments
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  console.log(appointments);

  return (
    <section>
      <DashCard title="Appointment List" />
      <div className="mx-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-between items-center gap-3">
          {appointments?.data?.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}
        </div>
        <button className="mt-5 px-6 py-2 bg-[#5d956dbe] rounded-full text-white">
          Load More
        </button>
      </div>
    </section>
  );
}
