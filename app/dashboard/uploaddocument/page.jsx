"use client";
import { useState, useEffect } from "react";
import DashCard from "../components/dashCard";
import Notification from "@/components/Global/Notification";

export default function UploadDocument() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [update_files, setUpdateFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleFileChange = (e) => {
    setUpdateFiles(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!update_files) return;

    try {
      // Upload file to ImgBB
      const formData = new FormData();
      formData.append("image", update_files);

      const imgbbResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=7a0f43e157252e0ca3031dea1d8dcccd`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!imgbbResponse.ok) {
        throw new Error("Failed to upload file to ImgBB");
      }

      const imgbbResult = await imgbbResponse.json();
      const imageUrl = imgbbResult.data.image.url;
      const paitentId = localStorage.getItem("userId");
      const booking = JSON.parse(localStorage.getItem("booking")) || {};

      // Hit your API endpoint with the file URL
      const apiResponse = await fetch(
        "https://tele.syscomatic.com/api/v1/uplaodfile/uploadinfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            docName: name,
            date: date,
            paitentId: paitentId,
            doctorId: booking.doctorId,
            FileLink: imageUrl,
          }),
        }
      );

      if (!apiResponse.ok) {
        throw new Error("Failed to submit form data to the API");
      }

      const apiResult = await apiResponse.json();

      // Set loading to false after successful submission
      setLoading(false);
      setNotificationTitle("File Uploaded Successfully");
    } catch (error) {
      console.error("Error:", error);
      setLoading(false); // Reset loading state on error
    }
  };

  return (
    <section>
      <DashCard title="Upload Document" />
      <div className="mx-5 mt-10">
        <div className="flex items-center justify-center bg-white overflow-hidden shadow rounded-lg border">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <form onSubmit={handleSubmit} className="pt-3 px-9">
              <div className="mb-2">
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  name="name"
                  id="name"
                  placeholder="Document Name*"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-none focus:shadow-md"
                />
              </div>
              <div className="">
                <input
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  name="date"
                  id="date"
                  placeholder="Document Date*"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-none focus:shadow-md"
                />
              </div>

              <div className="mb-6 pt-4">
                <div className="mb-8">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="file"
                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop files here
                      </span>
                      <span className="mb-2 block text-base font-medium text-[#6B7280]">
                        Or
                      </span>
                      <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="hover:shadow-form w-full rounded-md bg-[#5d956dbe] py-3 px-8 text-center text-base font-semibold text-white outline-none mb-3"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Send File"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {notificationTitle && <Notification title={notificationTitle} />}
    </section>
  );
}
