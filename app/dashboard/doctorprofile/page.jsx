import DashCard from "../components/dashCard";

export default function DoctorProfile() {
  return (
    <section>
      <DashCard title="Doctor Profile" />
      <div className="mx-5 mt-10">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <section className="p-6 mx-auto rounded-md shadow-md">
            
            <form>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-slate-600" for="username">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#5D956D] rounded-md dark:border-[#5D956D] focus:border-[#5D956D] dark:focus:border-[#5D956D] focus:outline-none focus:ring-none"
                  />
                </div>

                <div>
                  <label className="text-slate-600" for="emailAddress">
                    Doctor Name
                  </label>
                  <input
                    id="emailAddress"
                    type="text"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#5D956D] rounded-md dark:border-[#5D956D] focus:border-[#5D956D] dark:focus:border-[#5D956D] focus:outline-none focus:ring-none"
                  />
                </div>

                <div>
                  <label className="text-slate-600" for="password">
                    Doctor Email
                  </label>
                  <input
                    id="password"
                    type="email"
                    required
                    className="block w-full px-4 py-2 mt-2 text-slate-600 bg-white border border-[#5D956D] rounded-md dark:border-[#5D956D] focus:border-[#5D956D] dark:focus:border-[#5D956D] focus:outline-none focus:ring-none"
                  />
                </div>

                <div>
                  <label className="text-slate-600" for="idno">
                    Doctor ID
                  </label>
                  <input
                    id="idno"
                    type="text"
                    required
                    className="block w-full px-4 py-2 mt-2 text-slate-600 bg-white border border-[#5D956D] rounded-md dark:border-[#5D956D] focus:border-[#5D956D] dark:focus:border-[#5D956D] focus:outline-none focus:ring-none"
                  />
                </div>

                <div>
                  <label className="text-slate-600" for="passwordConfirmation">
                    Specialist*
                  </label>
                  <select
                    required
                    className="block w-full px-4 py-2 mt-2 text-slate-600 bg-white border border-[#5D956D] rounded-md dark:border-[#5D956D] focus:border-[#5D956D] dark:focus:border-[#5D956D] focus:outline-none focus:ring-none"
                  >
                    <option>Surabaya</option>
                    <option>Jakarta</option>
                    <option>Tangerang</option>
                    <option>Bandung</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-600" for="passwordConfirmation">
                    Address
                  </label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    required
                    className="block w-full px-4 py-2 mt-2 text-slate-600 bg-white border border-[#5D956D] rounded-md dark:border-[#5D956D] focus:border-[#5D956D] dark:focus:border-[#5D956D] focus:outline-none focus:ring-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-slate-600">Image</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#5D956D] border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-[#5D956D]"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-[#5D956D] hover:text-[#5d956dc4] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#5D956D]"
                        >
                          <span className="">Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1 ">or drag and drop</p>
                      </div>
                      <p className="text-xs ">PNG, JPG, GIF</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button type="submit" className="px-6 py-2 bg-[#5d956dbe] rounded-full text-white">
                  Save
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}
