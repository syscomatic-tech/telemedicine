"use client";
import React, { useEffect, useState } from "react";
import DashCard from "../components/dashCard";
import AppointmentCard from "./appointmentcard";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [visibleAppointments, setVisibleAppointments] = useState([]);
  const [loadCount, setLoadCount] = useState(4);

  useEffect(() => {
    const doctorId = localStorage.getItem("userId");
    fetch(`https://tele.syscomatic.com/api/v1/schedule/fetchDoctorScheduleById/${doctorId}`)
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data?.data); // Assuming the API response is an array of appointments
        setVisibleAppointments(data?.data.slice(0, loadCount));
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, [loadCount]);

  const handleLoadMore = () => {
    setLoadCount(prevCount => prevCount + 4);
  };

  return (
    <section>
      <DashCard title="Appointment List" />
      <div className="mx-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-between items-center gap-3">
          {visibleAppointments.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}
        </div>
        {visibleAppointments.length < appointments.length && (
          <button onClick={handleLoadMore} className="mt-5 px-6 py-2 bg-[#5d956dbe] rounded-full text-white">
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
