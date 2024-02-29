import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashCard from "../components/dashCard";

export default function MedicationRecord() {
  return (
    <section>
      <DashCard title="Medication Record" />
      <div className="mx-5 mt-10">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <table class="w-full border-collapse border mx-auto">
            <thead>
              <tr class="bg-[#5d956d46] text-slate-600">
                <th class="py-2 px-4 text-left">Name</th>
                <th class="py-2 px-4 text-left">Morning</th>
                <th class="py-2 px-4 text-left">Afternoon</th>
                <th class="py-2 px-4 text-left">Night</th>
                <th class="py-2 px-4 text-left">Days remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b border-">
                <td class="py-2 px-4">Zahed Hasan</td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#63E6BE" }}
                  />
                </td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
              </tr>
              <tr class="bg-white border-b border-">
                <td class="py-2 px-4">Tasin</td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#63E6BE" }}
                  />
                </td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
              </tr>
              <tr class="bg-white border-b border-">
                <td class="py-2 px-4">Amena Khatun</td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>

                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td class="py-2 px-4 text-xl">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "#FF0000" }}
                  />
                </td>
                <td class="py-2 px-4 text-xl">
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
