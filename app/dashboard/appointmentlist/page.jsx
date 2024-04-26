"use client";
import React, { useEffect, useState } from "react";
import DashCard from "../components/dashCard";
import AppointmentCard from "./appointmentcard";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [visibleAppointments, setVisibleAppointments] = useState([]);
  const [loadCount, setLoadCount] = useState(4);
  const [showAddModal, setShowAddModal] = useState(false);
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [medicationName, setMedicationName] = useState("");
  const [dayRemaining, setDayRemaining] = useState(0);
  const [morning, setMorning] = useState(false);
  const [afternoon, setAfternoon] = useState(false);
  const [evening, setEvening] = useState(false);
  const [night, setNight] = useState(false);

  const handleMorningClick = () => setMorning(!morning);
  const handleAfternoonClick = () => setAfternoon(!afternoon);
  const handleEveningClick = () => setEvening(!evening);
  const handleNightClick = () => setNight(!night);

  const handleAddMedication = () => {
    const medication = {
      doctorId: doctorId,
      paitentId: patientId,
      medicationName: medicationName,
      dayRemaining: dayRemaining,
      morning: morning,
      afternoon: afternoon,
      evening: evening,
      night: night,
    };
    console.log(medication);
    fetch(
      "https://tele.syscomatic.com/api/v1/medication/createMedicationRecord",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medication),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        setShowAddModal(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const doctorId = localStorage.getItem("userId");
    setDoctorId(doctorId);
    fetch(
      `https://tele.syscomatic.com/api/v1/schedule/fetchDoctorScheduleById/${doctorId}`
    )
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
    setLoadCount((prevCount) => prevCount + 4);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <section>
      <DashCard title="Appointment List" />
      <button
        onClick={() => setShowAddModal(true)}
        className="m-5 px-6 py-2 bg-[#5d956dbe] rounded-full text-white flex ml-auto"
      >
        Add Medication For Patient
      </button>
      <div className="mx-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-between items-center gap-3">
          {visibleAppointments.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}
        </div>
        {visibleAppointments.length < appointments.length && (
          <button
            onClick={handleLoadMore}
            className="mt-5 px-6 py-2 bg-[#5d956dbe] rounded-full text-white"
          >
            Load More
          </button>
        )}
      </div>
      {/* modal */}
      {showAddModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Modal content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 mx-auto sm:text-left ">
                    <h3 className="text-lg leading-6 font-medium font-serif text-[#86B092]">
                      Add Medication For Patient
                    </h3>
                    {/* Form for adding test result */}
                    <div className="mt-2 grid grid-cols-2 gap-x-5 w-full">
                      <div className="mb-4 w-full">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          DoctorID:
                        </label>
                        <input
                          type="text"
                          name="doctorId"
                          id="doctorId"
                          value={doctorId}
                          className="mt-1 outline-none block w-full shadow-sm sm:text-sm border p-1 rounded-md"
                        />
                      </div>
                      <div className="mb-4 w-full">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          PatentID:
                        </label>
                        <input
                          type="text"
                          name="patientId"
                          id="patientId"
                          onChange={(e) => setPatientId(e.target.value)}
                          className="mt-1 outline-none block w-full shadow-sm sm:text-sm border p-1 rounded-md"
                        />
                      </div>
                      <div className="mb-4 w-full col-span-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Medication Name:
                        </label>
                        <input
                          type="text"
                          name="patientId"
                          id="patientId"
                          onChange={(e) => setMedicationName(e.target.value)}
                          className="mt-1 outline-none block w-full shadow-sm sm:text-sm border p-1 rounded-md"
                        />
                      </div>
                      <div className="mb-4 w-full col-span-2 grid grid-cols-4 gap-2">
                        <button
                          onClick={handleMorningClick}
                          className="bg-[#EDEEEE] text-sm px-3 py-2 rounded-md hover:bg-[#86B092] duration-700"
                        >
                          morning
                        </button>
                        <button
                          onClick={handleAfternoonClick}
                          className="bg-[#EDEEEE] text-sm px-3 py-2 rounded-md hover:bg-[#86B092] duration-700"
                        >
                          afternoon
                        </button>
                        <button
                          onClick={handleEveningClick}
                          className="bg-[#EDEEEE] text-sm px-3 py-2 rounded-md hover:bg-[#86B092] duration-700"
                        >
                          evening
                        </button>
                        <button
                          onClick={handleNightClick}
                          className="bg-[#EDEEEE] text-sm px-3 py-2 rounded-md hover:bg-[#86B092] duration-700"
                        >
                          night
                        </button>
                      </div>
                      <div className="mb-4 w-full col-span-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Day Remaining:
                        </label>
                        <input
                          type="number"
                          name="day"
                          id="day"
                          onChange={(e) => setDayRemaining(e.target.value)}
                          className="mt-1 outline-none block w-full shadow-sm sm:text-sm border p-1 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleAddMedication}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeAddModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
