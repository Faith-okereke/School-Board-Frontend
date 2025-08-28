import bgImage from "../../../public/CYB Reseacrh.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen relative"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="flex flex-col gap-5 justify-center items-center text-center margin-auto absolute lg:left-1/4 lg:top-1/3 text-white top-1/3">
        <h1 className="lg:text-5xl text-4xl">Welcome to Your School Board!</h1>
        <p className="lg:text-xl text-lg">Having all school activities in one pack!</p>
        <button className=" text-sm rounded-lg px-6 py-3 border-green-500 border-2 text-green-500 hover:bg-green-500 hover:text-white transition-all">View Today's Announcements</button>
      </div>
    </div>
  );
};

export default Home;
