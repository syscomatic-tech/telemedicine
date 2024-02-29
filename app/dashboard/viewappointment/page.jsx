import DashCard from "../components/dashCard";

export default function ViewAppointment() {
  return (
    <section>
     
      <DashCard title="View Appointment" />
      <div className="mx-5 mt-10">
        <div class="max-w-2xl mx-auto mt-24">
          <div class="flex gap-3 bg-[#EDEEEE] shadow border rounded-xl overflow-hidden items-center justify-between px-10 py-5 mb-2">
            <div class="flex flex-col ">
              <p class="text-gray-500 mb-3">
                Date: <span class="text-gray-900">12/12/2021</span>
              </p>
              <p class="text-gray-500">
                Doctor Name: <span class="text-gray-900">Samsul Zamal SR</span>
              </p>
              <p class="text-gray-500">
                Specialist: <span class="text-gray-900">Baby Care</span>
              </p>
              <p class="text-gray-500">
                Time: <span class="text-gray-900">12:00 PM</span>
              </p>
            </div>

            <div>
              <button className="bg-[#5d956dbe] font-semibold py-2 px-3 rounded-full text-white">
                Join Now
              </button>
            </div>
          </div>
          <div class="flex gap-3 bg-[#EDEEEE] shadow border rounded-xl overflow-hidden items-center justify-between px-10 py-5 mb-2">
            <div class="flex flex-col ">
              <p class="text-gray-500 mb-3">
                Date: <span class="text-gray-900">12/12/2021</span>
              </p>
              <p class="text-gray-500">
                Doctor Name: <span class="text-gray-900">Samsul Zamal SR</span>
              </p>
              <p class="text-gray-500">
                Specialist: <span class="text-gray-900">Baby Care</span>
              </p>
              <p class="text-gray-500">
                Time: <span class="text-gray-900">12:00 PM</span>
              </p>
            </div>

            <div>
              <button className="bg-[#5d956dbe] font-semibold py-2 px-3 rounded-full text-white">
                Join Now
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
