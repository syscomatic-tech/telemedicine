"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {pathname == "/" && (
        <header class="inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 my-5 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
          <div class="px-4">
            <div class="flex items-center justify-between">
              <div class="flex shrink-0">
                <a aria-current="page" class="flex items-center" href="/">
                  <img
                    class="h-7 w-7"
                    src="https://i.ibb.co/xz5FJ1n/Vector.png"
                    alt="logo"
                  />
                  
                </a>
              </div>
              <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
                <a
                  aria-current="page"
                  class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  href="#"
                >
                  About
                </a>
                <a
                  class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  href="#"
                >
                  Service
                </a>
              </div>
              <div class="flex items-center justify-end gap-3">
                <a
                  class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                  href="/authentication/signup"
                >
                  Sign Up
                </a>
                <a
                  class="inline-flex items-center justify-center rounded-xl bg-[#5D956D] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#5d956dd1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                  href="/usertypes"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
