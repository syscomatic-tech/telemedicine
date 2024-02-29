import Link from "next/link";

export default function UserTypes() {
  return (
    <div>
      <h1 className="font-semibold text-4xl text-slate-400 text-center mt-[25vh]">
        User Types
      </h1>
      <div className="flex justify-center content-center mt-10">
        <Link href="/authentication/signin" className="bg-[#5d956dbe] hover:bg-[#5d956da2] hover:shadow-lg text-white duration-500 rounded-full px-3 py-1 text-2xl">
          User
        </Link>
        <Link href="/authentication/signin" className="bg-[#5d956dbe] marker:hover:bg-[#5d956da2] hover:shadow-lg text-white duration-500 rounded-full px-3 py-1 text-2xl mx-5">
          Doctor
        </Link>
        <Link href="/authentication/signin" className="bg-[#5d956dbe] hover:bg-[#5d956da2] hover:shadow-lg text-white duration-500 rounded-full px-3 py-1 text-2xl">
          Admin
        </Link>
      </div>
    </div>
  );
}
