"use client";
import DatePicker from "react-multi-date-picker";
import DashCard from "../components/dashCard";
import { useEffect, useState } from "react";
import Icon from "react-multi-date-picker/components/icon";
import transition from "react-element-popper/animations/transition";

export default function Schedule() {
  const [value, setValue] = useState(new Date());
  const [day, setDay] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    // Update the booking object with the selected time
    const booking = JSON.parse(localStorage.getItem("booking")) || {};
    const updatedBooking = { ...booking, time: selectedTime, date: day };

    // Store the updated booking object in local storage
    localStorage.setItem("booking", JSON.stringify(updatedBooking));
  }, [selectedTime]);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    const booking = JSON.parse(localStorage.getItem("booking")) || {};
    const bookingData = {
      date: day,
      time: time,
      doctorName: booking.doctorName,
      Specialist: "Dentist",
    };
console.log(bookingData);
    // Post booking data to the API
    fetch("https://tele.syscomatic.com/api/v1/schedule/createSchedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if required
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Booking data posted successfully:", data);
      })
      .catch((error) => {
        console.error("Error posting booking data:", error);
      });
  };
  // Sample array of time slots
  const timeSlots = [
    "10.00 AM - 11.00 AM",
    "12.00 PM - 1.00 PM",
    "1.00 PM - 2.00 PM",
    "2.00 PM - 3.00 PM",
    "3.00 PM - 4.00 PM",
    "4.00 PM - 5.00 PM",
  ];

  useEffect(() => {
    if (value) {
      setDay(`${value?.day}/${value?.month}/${value?.year}`);
    }
  }, [value]);

  return (
    <section>
      <DashCard title="Schedule" />
      <div className="mx-5 mt-10">
        {/* <DatePicker className="border-none" value={value} onChange={setValue} /> */}

        <div className="flex items-center justify-center max-w-[300px] bg-white overflow-hidden shadow rounded-lg border py-5">
          <DatePicker
            format="DD/MM/YYYY"
            render={<Icon />}
            onChange={setValue}
            value={value}
            animations={[
              transition({
                from: 35,
                transition:
                  "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
              }),
            ]}
          />

          <p className="ml-2 text-[#5D956D]">Click Icon To Select Date</p>
        </div>
        {value?.day && (
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-2 mt-3">
            {timeSlots.map((timeSlot, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center bg-white overflow-hidden shadow rounded-lg border py-5 hover:shadow-sm hover:bg-[#5d956d36] duration-500 w-full`}
                onClick={() => handleTimeClick(timeSlot)}
              >
                <p className="text-[#5D956D]">{day}</p>
                <p className="text-[#5D956D]">{timeSlot}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
