"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/components/authprovider/AuthContext";
import { motion } from "framer-motion";
import DashCard from "../components/dashCard";

const PersonalFeed = () => {
  const router = useRouter();
  const { user } = UserAuth();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { localStorage } = window;
      const guard = localStorage.getItem("token");
      if (!guard && !user) {
        router.push("/authentication/signin");
      }
    }
  }, []);

  return (
    <section>
      
      <DashCard title="User Profile" />

      <div className="mx-5 mt-10">
        <div class="bg-white overflow-hidden shadow rounded-lg border">
          <div class="px-4 py-5 sm:px-6 flex">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://i.ibb.co/QcK63FR/1.jpg"
                alt=""
              />
            </div>
            <div className="ml-2">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Zahed Hasan (User)
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                This is some information about the user.
              </p>
            </div>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  John Doe
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  johndoe@example.com
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">User Id:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  sf9WER461354********
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Phone number</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  (123) 456-7890
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Address</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  123 Main St <br />
                  Anytown, USA 12345
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
