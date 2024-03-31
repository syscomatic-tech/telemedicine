"use client";
import DatePicker from "react-multi-date-picker";
import DashCard from "../components/dashCard";
import { useEffect, useState } from "react";
import Icon from "react-multi-date-picker/components/icon";
import transition from "react-element-popper/animations/transition";

export default function Schedule() {
  const [value, setValue] = useState(new Date());
  const [day, setDay] = useState("");

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
            <div className="flex flex-col items-center justify-center bg-white overflow-hidden shadow rounded-lg border py-5 hover:shadow-sm hover:bg-[#5d956d36] duration-500 w-full">
              <p className="text-[#5D956D]">{day}</p>
              <p className="text-[#5D956D]">10.00 AM - 11.00 AM</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white overflow-hidden shadow rounded-lg border py-5 hover:shadow-sm hover:bg-[#5d956d36] duration-500 w-full">
              <p className="text-[#5D956D]">{day}</p>
              <p className="text-[#5D956D]">12.00 PM - 1.00 PM</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white overflow-hidden shadow rounded-lg border py-5 hover:shadow-sm hover:bg-[#5d956d36] duration-500 w-full">
              <p className="text-[#5D956D]">{day}</p>
              <p className="text-[#5D956D]">01.00 PM - 02.00 PM</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white overflow-hidden shadow rounded-lg border py-5 hover:shadow-sm hover:bg-[#5d956d36] duration-500 w-full">
              <p className="text-[#5D956D]">{day}</p>
              <p className="text-[#5D956D]">02.00 PM - 03.00 PM</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white overflow-hidden shadow rounded-lg border py-5 hover:shadow-sm hover:bg-[#5d956d36] duration-500 w-full">
              <p className="text-[#5D956D]">{day}</p>
              <p className="text-[#5D956D]">03.00 PM - 04.00 PM</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white overflow-hidden shadow rounded-lg border py-5 hover:shadow-sm hover:bg-[#5d956d36] duration-500 w-full">
              <p className="text-[#5D956D]">{day}</p>
              <p className="text-[#5D956D]">04.00 PM - 05.00 PM</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white overflow-hidden shadow rounded-lg border py-5 hover:shadow-sm hover:bg-[#5d956d36] duration-500 w-full">
              <p className="text-[#5D956D]">{day}</p>
              <p className="text-[#5D956D]">05.00 PM - 06.00 PM</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white overflow-hidden shadow rounded-lg border py-5 hover:shadow-sm hover:bg-[#5d956d36] duration-500 w-full">
              <p className="text-[#5D956D]">{day}</p>
              <p className="text-[#5D956D]">06.00 PM - 07.00 PM</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
