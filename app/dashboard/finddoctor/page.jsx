import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DoctorCard from "./DoctorCard";
import DashCard from "../components/dashCard";

export default function FindDoctor() {
  return (
    <section>
      <DashCard title="Find Doctor" />

      <div className="mx-5 mt-10">
        <div className="mb-10">
          <form class="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
            <input
              type="text"
              placeholder="Search anything"
              class="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
              name="topic"
            />
            <button class="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[#5d956dbe] text-white  tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
              Search
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
    </section>
  );
}
