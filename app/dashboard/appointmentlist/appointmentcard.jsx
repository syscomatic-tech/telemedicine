export default function AppointmentCard({ appointment}) {

  const { time, paitentId, date } = appointment;
  return (
    <div className="bg-[#5d956d46] hover:shadow-sm hover:scale-105 duration-500 text-slate-600 p-5 rounded-tr-xl rounded-bl-xl w-full">
      <p>Slot Details: {time} <br /> {date} </p>
      <p className="mt-5">Patient ID: {paitentId}</p>
    </div>
  );
}
