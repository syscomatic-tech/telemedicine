import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function DoctorCard({ doctor }) {
  const router = useRouter();

  const { userName, _id, role, image } = doctor;
 const patientId = localStorage.getItem("userId");
  const handleGetAppointment = () => {
    const booking = {
      doctorName: userName,
      doctorId: _id,
      patientId: patientId,
    };

    // Store booking object in local storage
    localStorage.setItem("booking", JSON.stringify(booking));

    // Redirect to '/dashboard/schedule'
    router.push("/dashboard/schedule");
  };

  return (
    <div className="rounded-xl overflow-hidden flex shadow hover:shadow-lg duration-500 bg-white cursor-pointer h-28">
      <div className="w-7/12 pl-3 p-3 text-text1 flex flex-col justify-center">
        <p className="text-base mb-2 font-bold truncate">{userName}</p>
        <div className="text-xs text-primary mb-2">
          <a className="flex items-center">
            <FontAwesomeIcon
              icon={faStethoscope}
              className={` text-[#5d956d7e] w-5 h-5`}
            />
            <span className="font-bold tracking-wide text-sm text-[#5d956d7e] ml-1">
              Endocrinologists
            </span>
          </a>
        </div>
        <div className="">
          <button
            onClick={handleGetAppointment}
            className="text-sm font-semibold text-slate-100 px-2 py-1 rounded-full bg-[#5d956dbe]"
          >
            Get Appointment
          </button>
        </div>
      </div>
      <div className="lg:flex flex w-5/12 p-2">
        <img
          src="https://i.ibb.co/QcK63FR/1.jpg"
          className="rounded-xl object-cover w-full h-full"
          alt="Doctor Image"
        />
      </div>
    </div>
  );
}
