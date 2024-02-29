import DashCard from "../components/dashCard";

export default function ViewTestResult() {
  return (
    <section>
      <DashCard title="View Test Result" />
      <div className="mx-5 mt-10">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <table className="w-full border-collapse border mx-auto">
            <thead>
              <tr className="bg-[#5d956d46] text-slate-600">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Result</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-">
                <td className="py-2 px-4">Tasin</td>
                <td className="py-2 px-4">
                  <span className="text-sm bg-green-200 rounded-full px-2 py-1">
                    Done
                  </span>
                </td>
                <td className="py-2 px-4 text-lg">Positive</td>
                <td className="py-2 px-4 text-lg">22/01/2024</td>
              </tr>
              <tr className="bg-white border-b border-">
                <td className="py-2 px-4">Zahed Hasan</td>
                <td className="py-2 px-4">
                  <span className="text-sm bg-yellow-300 rounded-full px-2 py-1">
                    Pending
                  </span>
                </td>
                <td className="py-2 px-4 text-lg">Negative</td>
                <td className="py-2 px-4 text-lg">22/01/2024</td>
              </tr>
              <tr className="bg-white border-b border-">
                <td className="py-2 px-4">Shaiadul</td>
                <td className="py-2 px-4">
                  <span className="text-sm bg-green-200 rounded-full px-2 py-1">
                    Done
                  </span>
                </td>
                <td className="py-2 px-4 text-lg">Positive</td>
                <td className="py-2 px-4 text-lg">22/01/2024</td>
              </tr>
              <tr className="bg-white border-b border-">
                <td className="py-2 px-4">Zosim</td>
                <td className="py-2 px-4">
                  <span className="text-sm bg-red-200 rounded-full px-2 py-1">
                    Block
                  </span>
                </td>
                <td className="py-2 px-4 text-lg">Negative</td>
                <td className="py-2 px-4 text-lg">22/01/2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
