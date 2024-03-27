import DashCard from "../components/dashCard";

export default function UploadDocument() {
  return (
    <section>
      <DashCard title="Upload Document" />
      <div className="mx-5 mt-10">
        <div className="flex items-center justify-center bg-white overflow-hidden shadow rounded-lg border">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <form className="pt-3 px-9">
              <span></span>
              <div className="mb-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Document Name*"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-none focus:shadow-md"
                />
              </div>
              <div className="">
                <input
                  type="date"
                  name="name"
                  id="name"
                  placeholder="Document Name*"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-none focus:shadow-md"
                />
              </div>

              <div className="mb-6 pt-4">
                <div className="mb-8">
                  <input
                    type="file"
                    name="file"
                    id="file"
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
                <button className="hover:shadow-form w-full rounded-md bg-[#5d956dbe] py-3 px-8 text-center text-base font-semibold text-white outline-none mb-3">
                  Send File
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
