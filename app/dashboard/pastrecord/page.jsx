import DashCard from "../components/dashCard";

export default function PastRecord() {
  return (
    <section>
      <DashCard title="Past Record" />

      <div className="mx-5 mt-10">
        <div className="flex ">
          <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[#5d956dbe] text-white  tracking-wide border-transparent py-1.5 h-[38px] mr-3">
            Add More
          </button>
          <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[#5d956dbe] text-white  tracking-wide border-transparent py-1.5 h-[38px]">
            See All
          </button>
        </div>

        <div className=" mx-auto mt-24 flex flex-col gap-y-5">
          <div className=" bg-[#5d956d46] gap-y-2 hover:shadow-lg duration-500 border rounded-xl overflow-hidden items-center justify-between px-10 py-5">
            <div className="flex flex-col ">
              <p className="text-gray-500 mb-3">
                Date: <span className="text-gray-900">12/12/2021</span>
              </p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique accusantium error aut asperiores velit excepturi
                eligendi magni ipsa exercitationem minima, hic molestiae iste
                ducimus assumenda dolor. Facilis porro officia voluptatibus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique accusantium error aut asperiores velit excepturi
                eligendi magni ipsa exercitationem minima, hic molestiae iste
                ducimus assumenda dolor. Facilis porro officia voluptatibus.
              </p>
            </div>
          </div>
          <div className=" bg-[#5d956d46] gap-y-2 hover:shadow-lg duration-500 border rounded-xl overflow-hidden items-center justify-between px-10 py-5">
            <div className="flex flex-col ">
              <p className="text-gray-500 mb-3">
                Date: <span className="text-gray-900">12/12/2021</span>
              </p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique accusantium error aut asperiores velit excepturi
                eligendi magni ipsa exercitationem minima, hic molestiae iste
                ducimus assumenda dolor. Facilis porro officia voluptatibus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique accusantium error aut asperiores velit excepturi
                eligendi magni ipsa exercitationem minima, hic molestiae iste
                ducimus assumenda dolor. Facilis porro officia voluptatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
