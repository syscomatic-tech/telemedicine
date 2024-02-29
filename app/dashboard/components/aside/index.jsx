"use client";
import {
  faCalendarDays,
  faFileLines,
  faFolderOpen,
  faImage,
  faNewspaper,
  faObjectGroup,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faBookOpen,
  faDashboard,
  faHome,
  faStethoscope,
  faUpload,
  faUserDoctor,
  faVideo,
  faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AsideDashboard = () => {
  const pathname = usePathname();

  return (
    <div className="fixed hidden md:flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 h-full transition-all duration-300 border-none z-10 sidebar bg-[#F9FAFB]">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow ">
        <ul className="flex flex-col py-4 space-y-1">
          <li>
            <Link
              href="/dashboard"
              className="px-5 flex cursor-pointer"
            >
              <img
                className="rounded-full w-12 h-12"
                src="https://i.ibb.co/QcK63FR/1.jpg"
                alt="user"
              />
              <div className="ml-2">
                <span className="text-slate-600 font-semibold">
                  Zahed Hasan
                </span>{" "}
                <br />
                <span className="text-slate-600 font-serif bg-[#ACC8B5] rounded-full px-2 ">
                  USER
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={` ${
                pathname == "/dashboard" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md mt-10`}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faDashboard}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/personalfeed"
              className={` ${
                pathname == "/dashboard/personalfeed" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                Profile
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/uploaddocument"
              className={` ${
                pathname == "/dashboard/uploaddocument" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faUpload}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                Upload Document
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/viewappointment"
              className={` ${
                pathname == "/dashboard/viewappointment" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                View Appoinment
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/medicationrecord"
              className={` ${
                pathname == "/dashboard/medicationrecord"
                  ? "bg-[#5d956d7e]"
                  : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                Medication Record
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/viewtestresult"
              className={` ${
                pathname == "/dashboard/viewtestresult" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                View Test Result
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/finddoctor"
              className={` ${
                pathname == "/dashboard/finddoctor" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faStethoscope}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                Find Doctor
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/pastrecord"
              className={` ${
                pathname == "/dashboard/pastrecord" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                Past Record
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/doctorprofile"
              className={` ${
                pathname == "/dashboard/doctorprofile" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faUserDoctor}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                Doctor Profile
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/appointmentlist"
              className={` ${
                pathname == "/dashboard/appointmentlist" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faBook}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                Appoinment List
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/schedule"
              className={` ${
                pathname == "/dashboard/schedule" ? "bg-[#5d956d7e]" : ""
              } relative flex flex-row items-center focus:outline-none text-white-600 hover:text-white-800 pr-6 rounded-md `}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className={` text-black w-5 h-5`}
                />
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">
                Schedule
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsideDashboard;
