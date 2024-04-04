"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <section>
      {pathname == "/" && (
        <header className="z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3  shadow backdrop-blur-lg md:rounded-3xl lg:max-w-screen-lg">
          <div className="px-4">
            <div className="flex items-center justify-between">
              <div className="flex shrink-0">
                <Link
                  href="/"
                  aria-current="page"
                  className="flex items-center"
                >
                  <img
                    className="h-7 w-7"
                    src="https://i.ibb.co/xz5FJ1n/Vector.png"
                    alt="logo"
                  />
                </Link>
              </div>
              
              <div className="flex items-center justify-end gap-3">
                <Link
                  className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                  href="/usertypes"
                >
                  Sign Up
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-xl bg-[#5D956D] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#5d956dd1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                  href="/authentication/signin"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </header>
      )}
    </section>
  );
}
