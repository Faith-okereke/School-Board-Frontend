import { FaFilter, FaSearch } from "react-icons/fa";
import bgImage from "../../../public/bgschool.png";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";
const Announcement = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div
      className="px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="flex justify-between lg:flex-row flex-col lg:items-center w-full ">
        <h1 className="lg:text-center lg:text-3xl text-xl py-5">Announcements</h1>
        <div className="flex items-center gap-3 pb-6 lg:pb-0 w-full lg:w-auto">
          <div
            onClick={() => setOpenFilter(!openFilter)}
            className="relative flex justify-between items-center gap-2 border-2 border-black/80 rounded-lg p-2 cursor-pointer lg:w-28 w-1/2"
          >
            <p>Filter</p>
            <IoFilter fontSize={20} className="" />
            {openFilter && (
              <div className="absolute top-12 left-0 bg-white rounded-lg p-3 w-full shadow-lg">
                <p className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer">
                  Date
                </p>
                <p className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer">
                  Course
                </p>
                <p className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer">
                  Lecturer
                </p>
              </div>
            )}
          </div>

          <div className="border-2 rounded-lg p-2 relative focus:border-3 border-black/80">
            <input
              className="w-full outline-none border-none placeholder:text-sm bg-transparent"
              type="search"
              name="search"
              id="search"
              placeholder="Search messages"
            />
            <FaSearch className="absolute right-2 top-3" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 pb-8">
        {[...Array(7)].map((_, i) => (
          <div
            className="bg-[#E0DEDE] text-black rounded-lg p-5 font-normal "
            key={i}
          >
            <div className="flex justify-between w-full items-center  pb-3">
              <h4 className="font-bold text-xl">CIT 306 Class</h4>
              <p className="">27/05/2025</p>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              accusantium libero quam quae ea modi dicta molestiae debitis
              dolorem veniam sed unde cupiditate, doloremque ducimus dolores?
              Non quasi cum fugiat.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
