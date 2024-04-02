"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const { localStorage } = window;
  //     const guard = localStorage.getItem("token");
  //     if (!guard) {
  //       router.push("/authentication/signin");
  //     }
  //   }
  // }, []);

  return (
    <main>
      <section className="">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 mt-20 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Echo
            <span className="text-[#5D956D] ml-2">Medix</span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">Beyond Boundaries</p>
          <div className="flex flex-wrap justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-3 m-2 text-lg text-gray-100 font-semibold rounded-full bg-[#5D956D] uppercase"
            >
              view services
            </Link>
            <button className="px-8 py-3 m-2 text-lg border rounded-full text-gray-500 border-gray-700 uppercase">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// Beyond Boundaries
