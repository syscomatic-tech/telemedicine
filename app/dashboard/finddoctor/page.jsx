"use client";import { useState, useEffect } from 'react';
import DoctorCard from "./DoctorCard";
import DashCard from "../components/dashCard";

export default function FindDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch all users initially
    fetch('https://tele.syscomatic.com/api/v1/user/getAllUser')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched doctors:', data); // Log fetched data
        // Assuming data is an array of doctors
        setDoctors(data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.topic.value;
    // Fetch users by doctor name and role 'DC'
    fetch(`https://tele.syscomatic.com/api/v1/user/search?userName=${searchValue}`)
      .then(response => response.json())
      .then(data => {
        console.log('Searched doctors:', data?.data); // Log searched data
        // Assuming data is an array of doctors
        setDoctors(data?.data);
      })
      .catch(error => {
        console.error('Error fetching doctors by name:', error);
      });
  };

  return (
    <section>
      <DashCard title="Find Doctor" />

      <div className="mx-5 mt-10">
        <div className="mb-10">
          <form className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search anything"
              className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
              name="topic"
            />
            <button type="submit" className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[#5d956dbe] text-white  tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
              Search
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Array.isArray(doctors) && doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
