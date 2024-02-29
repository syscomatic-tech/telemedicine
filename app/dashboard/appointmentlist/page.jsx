import DashCard from "../components/dashCard";
import AppointmentCard from "./appointmentcard";

export default function AppointmentList() {
  return (
    <section>
      <DashCard title="Appointment List" />
      <div className="mx-5 mt-10">
        <div class="grid grid-cols-1 md:grid-cols-4 justify-between items-center gap-3">
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
        </div>
        <button class="mt-5 px-6 py-2 bg-[#5d956dbe] rounded-full text-white">
          Load More
        </button>
      </div>
    </section>
  );
}
