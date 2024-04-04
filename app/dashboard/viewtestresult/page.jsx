"use client";
import React, { useEffect, useState } from "react";
import DashCard from "../components/dashCard";

export default function ViewTestResult() {
  const [testResults, setTestResults] = useState([]);
  const [newTestResult, setNewTestResult] = useState({
    name: "",
    status: "",
    result: "",
    date: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [updatedTestResultData, setUpdatedTestResultData] = useState({});
  const [newTestResultData, setNewTestResultData] = useState({
    name: "",
    status: "",
    result: "",
    date: "",
  });

  // Function to handle changes in the modal form fields and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTestResultData({ ...updatedTestResultData, [name]: value });
  };

  // Function to handle changes in the modal form fields and update state
  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestResultData({ ...newTestResultData, [name]: value });
  };

  // Function to update test result
  function updateTestResult() {
    const updatedResults = testResults.map((result) => {
      if (result._id === selectedTestId) {
        return { ...result, ...updatedTestResultData };
      }
      return result;
    });
    setTestResults(updatedResults);
    fetch(
      `https://tele.syscomatic.com/api/v1/viewTestresult/updateTestResult/${selectedTestId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTestResultData),
      }
    )
      .then(() => closeModal())
      .catch((error) => {
        console.error("Error updating test result:", error);
      });
  }

  // add test result
  function addTestResult() {
    const userId = localStorage.getItem("userId");
    fetch("https://tele.syscomatic.com/api/v1/viewTestresult/addTestResult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        name: newTestResultData.name,
        status: newTestResultData.status,
        result: newTestResultData.result,
        date: newTestResultData.date,
      }),
    })
      .then(() => closeAddModal())
      .catch((error) => {
        console.error("Error adding test result:", error);
      });
  }

  useEffect(() => {
    const id = localStorage.getItem("userId")
    fetch(`https://tele.syscomatic.com/api/v1/viewTestresult/getTestResultByUserId/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTestResults(data?.testResult);
        console.log(data?.testResult);
      })
      .catch((error) => {
        console.error("Error fetching test results:", error);
      });
  }, []);

  // Function to determine the status color
  function getStatusColor(status) {
    switch (status) {
      case "done":
        return "bg-green-200";
      case "pending":
        return "bg-yellow-300";
      case "block":
        return "bg-red-200";
      default:
        return "";
    }
  }

  // Function to open modal for updating test result
  function openModal(testResultId) {
    setShowModal(true);
    setSelectedTestId(testResultId);
  }

  // Function to close modal
  function closeModal() {
    setShowModal(false);
    setSelectedTestId(null);
  }

  // Function to open modal for adding test result
  function openAddModal() {
    setShowAddModal(true);
  }

  // Function to close modal
  function closeAddModal() {
    setShowAddModal(false);
  }

  

  // Function to delete test result
  function deleteTestResult(id) {
    console.log(id);
    const updatedResults = testResults.filter((result) => result._id !== id);
    setTestResults(updatedResults);
    fetch(
      `https://tele.syscomatic.com/api/v1/viewTestresult/deleteTestResultById/${id}`,
      {
        method: "DELETE",
      }
    ).catch((error) => {
      console.error("Error deleting test result:", error);
    });
  }

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
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((testResult, index) => (
                <tr key={index} className="bg-white border-b border-">
                  <td className="py-2 px-4">
                    <input
                      className="border-none focus:outline-none"
                      value={testResult.name}
                      type="text"
                    />
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`text-sm rounded-full px-2 py-1 ${getStatusColor(
                        testResult.status
                      )}`}
                    >
                      {testResult.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-lg">
                    <input
                      className="border-none focus:outline-none"
                      value={testResult.result}
                      type="text"
                    />
                  </td>
                  <td className="py-2 px-4 text-lg">
                    <input
                      className="border-none focus:outline-none"
                      value={testResult.date}
                      type="text"
                    />
                  </td>
                  <td>
                    <div className="flex justify-between items-center gap-x-1 mx-1">
                      <button
                        className="text-xs bg-red-300 rounded-md p-1 w-full"
                        onClick={() => deleteTestResult(testResult._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-xs bg-yellow-300 rounded-md p-1 w-full"
                        onClick={() => openModal(testResult._id)} // Open modal for updating test result
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <input
                    className="border-none focus:outline-none px-4"
                    value={newTestResult.name}
                    type="text"
                    onChange={(e) =>
                      setNewTestResult({
                        ...newTestResult,
                        name: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    className="border-none focus:outline-none px-4"
                    value={newTestResult.status}
                    type="text"
                    onChange={(e) =>
                      setNewTestResult({
                        ...newTestResult,
                        status: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    className="border-none focus:outline-none px-4"
                    value={newTestResult.result}
                    type="text"
                    onChange={(e) =>
                      setNewTestResult({
                        ...newTestResult,
                        result: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    className="border-none focus:outline-none px-4"
                    value={newTestResult.date}
                    type="text"
                    onChange={(e) =>
                      setNewTestResult({
                        ...newTestResult,
                        date: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <button
                    onClick={openAddModal}
                    className="text-xs bg-green-400 rounded-md px-2 py-1 w-full"
                  >
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal for updating test result */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Modal content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Update Test Result
                    </h3>
                    {/* Form for updating test result */}
                    <div className="mt-2">
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 outline-none block w-full shadow-sm sm:text-sm border p-1 rounded-md"
                          value={updatedTestResultData.name || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="status"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Status:
                        </label>
                        <select
                          id="status"
                          name="status"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={updatedTestResultData.status || ""}
                          onChange={handleInputChange}
                        >
                          <option value="done">Done</option>
                          <option value="pending">Pending</option>
                          <option value="block">Block</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="result"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Result:
                        </label>
                        <select
                          id="result"
                          name="result"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={updatedTestResultData.result || ""}
                          onChange={handleInputChange}
                        >
                          <option value="positive">Positive</option>
                          <option value="negative">Negative</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Date:
                        </label>
                        <input
                          type="text"
                          name="date"
                          id="date"
                          className="mt-1 outline-none block w-full shadow-sm sm:text-sm border p-1 rounded-md"
                          value={updatedTestResultData.date || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={updateTestResult}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for adding test result */}
      {showAddModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Modal content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Add Test Result
                    </h3>
                    {/* Form for adding test result */}
                    <div className="mt-2">
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 outline-none block w-full shadow-sm sm:text-sm border p-1 rounded-md"
                          value={newTestResultData.name || ""}
                          onChange={handleAddInputChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="status"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Status:
                        </label>
                        <select
                          id="status"
                          name="status"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={newTestResultData.status || ""}
                          onChange={handleAddInputChange}
                        >
                          <option value="done">Done</option>
                          <option value="pending">Pending</option>
                          <option value="block">Block</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="result"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Result:
                        </label>
                        <select
                          id="result"
                          name="result"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={newTestResultData.result || ""}
                          onChange={handleAddInputChange}
                        >
                          <option value="positive">Positive</option>
                          <option value="negative">Negative</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Date:
                        </label>
                        <input
                          type="text"
                          name="date"
                          id="date"
                          className="mt-1 outline-none block w-full shadow-sm sm:text-sm border p-1 rounded-md"
                          value={newTestResultData.date || ""}
                          onChange={handleAddInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={addTestResult}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeAddModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
