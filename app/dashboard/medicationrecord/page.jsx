"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import DashCard from "../components/dashCard";

export default function MedicationRecord() {
  const [medicationRecords, setMedicationRecords] = useState([]);

  useEffect(() => {
    fetch("https://tele.syscomatic.com/api/v1/medication/getAllMedicationRecords")
      .then(response => response.json())
      .then(data => {
        if (data) {
          setMedicationRecords(data.data);
          console.log('Medication records:', data.data);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching medication records:', error);
      });
  }, []);

  return (
    <section>
      <DashCard title="Medication Record" />
      <div className="mx-5 mt-10">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <table className="w-full border-collapse border mx-auto">
            <thead>
              <tr className="bg-[#5d956d46] text-slate-600">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Morning</th>
                <th className="py-2 px-4 text-left">Afternoon</th>
                <th className="py-2 px-4 text-left">Night</th>
                <th className="py-2 px-4 text-left">Days remaining</th>
              </tr>
            </thead>
            <tbody>
              {medicationRecords.map((record, index) => (
                <tr key={index} className="bg-white border-b border-">
                  <td className="py-2 px-4">{record.medicationName}</td>
                  <td className="py-2 px-4 text-xl">
                    <FontAwesomeIcon
                      icon={record.morning ? faCheck : faTimes}
                      style={{ color: record.morning ? "#63E6BE" : "#FF0000" }}
                    />
                  </td>
                  <td className="py-2 px-4 text-xl">
                    <FontAwesomeIcon
                      icon={record.afternoon ? faCheck : faTimes}
                      style={{ color: record.afternoon ? "#63E6BE" : "#FF0000" }}
                    />
                  </td>
                  <td className="py-2 px-4 text-xl">
                    <FontAwesomeIcon
                      icon={record.night ? faCheck : faTimes}
                      style={{ color: record.night ? "#63E6BE" : "#FF0000" }}
                    />
                  </td>
                  <td className="py-2 px-4 text-xl">
                    {/* <FontAwesomeIcon
                      icon={record.remainingDays > 0 ? faCheck : faTimes}
                      style={{ color: record.remainingDays > 0 ? "#63E6BE" : "#FF0000" }}
                    /> */}
                    {record.dayRemaining}
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
