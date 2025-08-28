import bgImage from "../../../public/bgschool.png";
const Announcement = () => {
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
      <h1 className="text-center text-3xl py-5">Recent Announcements</h1>
      <div className="flex flex-col gap-6 pb-8">
        {[...Array(7)].map((_, i) => (
          <div
            className="bg-blue-100 text-black rounded-lg p-5 font-normal "
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
