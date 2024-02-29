import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashCard from "../components/dashCard";

export default function MedicationRecord() {
  return (
    <section>
      <DashCard title="Medication Record" />
      <div className="mx-5 mt-10">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <table className="w-full border-collapse border mx-auto">
            <thead>
              <tr className="bg-[#5d956d46] text-slate-600">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Morning</th>
                <th className="py-2 px-4 text-left">Afternoon</th>
                <th className="py-2 px-4 text-left">Night</th>
                <th className="py-2 px-4 text-left">Days remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-">
                <td className="py-2 px-4">Zahed Hasan</td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#63E6BE" }}
                  />
                </td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
              </tr>
              <tr className="bg-white border-b border-">
                <td className="py-2 px-4">Tasin</td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#63E6BE" }}
                  />
                </td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
              </tr>
              <tr className="bg-white border-b border-">
                <td className="py-2 px-4">Amena Khatun</td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>

                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td className="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#63E6BE" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
