"use client";
import { UserAuth } from "@/components/authprovider/AuthContext";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import {
  faBars,
  faGear,
  faQuestion,
  faSignIn,
  faSignOut,
  faBook,
  faBookOpen,
  faDashboard,
  faStethoscope,
  faUpload,
  faUserDoctor,
  faXmark,
  faUserCircle,
  faNewspaper,
  faFileLines,
  faFolderOpen,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const HeaderDashboard = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [showAside, setShowAside] = useState(false);
  const [userData, setUserData] = useState({ username: "", email: "" });
  const { user, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

 

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const handleSignOut = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
      localStorage.removeItem("role");

      router.push("/authentication/signin");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { localStorage } = window;
      setUserData((prev) => {
        return {
          ...prev,
          username: localStorage.getItem("username"),
          email: localStorage.getItem("email"),
        };
      });
    }
  }, []);

  // ---------------------------
  // Farmer motion
  // ---------------------------
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <div className=" w-full flex items-center justify-between h-16 fixed z-20 bg-[#edeeee]">
      <div className="flex items-center justify-center pl-3 border-none">
        <Link href="/dashboard/personalfeed">
          <img
            className=" object-contain md:h-10 w-fit"
            src="https://i.ibb.co/xz5FJ1n/Vector.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center h-14 header-right ml-2 mr-5">
        <ul className="flex items-center justify-center">
          <li>
            <button onClick={handleSignOut} className=" duration-500 px-2 py-1 text-[#5d956dbe] mx-5 rounded-lg text-lg">
              <FontAwesomeIcon
                icon={faSignOut}
                className="w-4 h-4 mr-1 text-[#5d956dbe]"
              />
              Logout
            </button>
          </li>
          <li className="relative">
            <div className="">
              {/* <img
                onClick={() => setShowDiv(!showDiv)}
                className="rounded-full cursor-pointer"
                src={user?.photoURL || "https://i.ibb.co/QcK63FR/1.jpg"}
                alt="user picture"
              /> */}
              <FontAwesomeIcon
                icon={faBell}
                className="w-7 h-7 mr-1 text-[#5d956dbe]"
              />
            </div>
            {/* users card */}
            <motion.div
              // className={`transition-transform duration-300 ease-in-out transform ${
              //   showDiv ? "translate-x-0" : "translate-x-full"
              // }`}
              initial={false}
              animate={showDiv ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {showDiv && (
                <div className="bg_color_gradient absolute right-0 my-5 p-3 rounded-md flex flex-col justify-center items-center mx-auto w-56 transition-all">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL || "https://i.ibb.co/QcK63FR/1.jpg"}
                    alt=""
                  />

                  <p className="text-sm lg:text-md font-semibold text-white">
                    {user?.displayName || userData?.username}
                  </p>
                  <p className="text-xs lg:text-sm mt-1 text-gray-200">
                    {user?.email || userData?.email}
                  </p>
                  <div className="flex flex-col justify-center items-center ">
                    {userData || user ? (
                      <>
                        <button
                          onClick={handleSignOut}
                          className={`${
                            user ? "hidden" : "block"
                          } group btn_color_gradient hover:scale-105 duration-500 text-white uppercase text-sm px-2 py-1 rounded-md mt-2 w-full`}
                        >
                          <FontAwesomeIcon
                            icon={faSignOut}
                            className="group-hover:rotate-90 duration-500 w-4 h-4 mr-1"
                          />
                          Sign Out
                        </button>
                        <button
                          onClick={() => handleGoogleSignOut()}
                          className={`${
                            user ? "block" : "hidden"
                          } group btn_color_gradient hover:scale-105 duration-500 text-white uppercase text-sm px-2 py-1 rounded-md mt-2 w-full`}
                        >
                          <FontAwesomeIcon
                            icon={faSignOut}
                            className="w-4 h-4 mr-1"
                          />
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <Link href="/authentication/signin">
                        <button className="group btn_color_gradient hover:scale-105 duration-500 text-white uppercase text-sm px-2 py-1 rounded-md mt-2 w-full">
                          <FontAwesomeIcon
                            icon={faSignIn}
                            className="w-4 h-4 mr-1"
                          />
                          Sign In
                        </button>
                      </Link>
                    )}

                    <button className="group btn_color_gradient hover:scale-105 duration-500 text-white uppercase text-sm px-2 py-1 rounded-md mt-2 w-full">
                      <FontAwesomeIcon
                        icon={faQuestion}
                        className="group-hover:rotate-[360deg] duration-700 w-4 h-4 mr-1"
                      />{" "}
                      FAQ & Support
                    </button>
                    <button className="group btn_color_gradient hover:scale-105 duration-500 text-white uppercase text-sm px-2 py-1 rounded-md mt-2 w-full flex justify-center content-center">
                      <FontAwesomeIcon
                        icon={faGear}
                        className="group-hover:rotate-90 duration-500 w-4 h-4 mr-1"
                      />{" "}
                      Settings
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </li>
          <li>
            <FontAwesomeIcon
              onClick={() => setShowAside(!showAside)}
              icon={showAside ? faXmark : faBars}
              className="text-[#5d956dbe] w-5 h-5 ml-4 block md:hidden "
            />
            {/* show aside */}
            <div
              className={`transition-transform duration-300 ease-in-out transform ${
                showAside ? "translate-x-0" : "translate-x-full"
              } `}
            >
              {showAside && (
                <div className="bg-[#edeeee] absolute -right-5 my-5 p-3 flex flex-col justify-start items-center mx-auto w-60 h-[100vh]">
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
                          pathname == "/dashboard/personalfeed"
                            ? "bg-[#5d956d7e]"
                            : ""
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
                          pathname == "/dashboard/uploaddocument"
                            ? "bg-[#5d956d7e]"
                            : ""
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
                          pathname == "/dashboard/viewappointment"
                            ? "bg-[#5d956d7e]"
                            : ""
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
                          pathname == "/dashboard/viewtestresult"
                            ? "bg-[#5d956d7e]"
                            : ""
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
                          pathname == "/dashboard/finddoctor"
                            ? "bg-[#5d956d7e]"
                            : ""
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
                          pathname == "/dashboard/pastrecord"
                            ? "bg-[#5d956d7e]"
                            : ""
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
                          pathname == "/dashboard/doctorprofile"
                            ? "bg-[#5d956d7e]"
                            : ""
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
                          pathname == "/dashboard/appointmentlist"
                            ? "bg-[#5d956d7e]"
                            : ""
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
                          pathname == "/dashboard/schedule"
                            ? "bg-[#5d956d7e]"
                            : ""
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
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderDashboard;
