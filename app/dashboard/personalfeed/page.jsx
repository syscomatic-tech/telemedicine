"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashCard from "../components/dashCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";

const PersonalFeed = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  const { userName, role, email, _id, phoneNumber, address } = userData;

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const { localStorage } = window;
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/authentication/signin");
        } else {
          try {
            const response = await fetch(
              `https://tele.syscomatic.com/api/v1/user/getuserInfoById/${userId}`
            );
            if (response.ok) {
              const fetchUserData = await response.json();
              setUserData(fetchUserData?.user);
            } else {
              // Handle error response from the API
              console.error("Error fetching user data");
            }
          } catch (error) {
            // Handle network errors
            console.error("Error fetching user data:", error);
          }
        }
      }
    };

    fetchData();
  }, [router]);

  const handleUpdate = async () => {
    const userId = localStorage.getItem("userId");

    try {
      setIsUpdating(true);
      const response = await fetch(
        `https://tele.syscomatic.com/api/v1/user/updateById/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...userData,
          }),
        }
      );

      if (response.ok) {
        console.log("User data updated successfully");
        // Optionally, you can fetch updated user data here and set it to state
      } else {
        console.error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <section>
      <DashCard title="User Profile" />

      <div className="mx-5 mt-10">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div className="flex ">
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://i.ibb.co/QcK63FR/1.jpg"
                  alt=""
                />
              </div>
              <div className="ml-2">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {userName} ({role})
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  This is some information about {userName}.
                </p>
              </div>
            </div>
            <div>
              <button
                className="text-xl self-end md:ml-10"
                onClick={handleUpdate}
                disabled={isUpdating}
              >
                <FontAwesomeIcon icon={faFilePen} />
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    className="border-none focus:outline-none"
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={handleChange}
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    className="border-none focus:outline-none"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    readOnly
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">User Id:</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    className="border-none focus:outline-none"
                    type="text"
                    name="_id"
                    value={_id}
                    readOnly
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    className="border-none focus:outline-none"
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange}
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    className="border-none focus:outline-none"
                    type="text"
                    name="address"
                    value={address}
                    onChange={handleChange}
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalFeed;
