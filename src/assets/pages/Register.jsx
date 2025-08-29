import { Link, useNavigate } from "react-router";
import logo from "../../../public/NACOS_LOGO.png";
import loginBg from "../../../public/BlogBag.jpg";
import { useState } from "react";
const Register = () => {
  const naviagte = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      naviagte("/");
      console.log(loginData);
    }
  };
  return (
    <div className="flex  lg:items-center lg:justify-center w-full lg:flex-row flex-col">
      <div
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        className="lg:w-1/2 relative lg:h-screen"
      >
        <div className="hidden lg:flex lg:absolute static top-1/3 left-0 px-12 -translate-1/2 z-1 flex-col gap-3 items-center">
          <img className="h-24 w-24" src={logo} alt="" />
          <h2 className="text-3xl text-black">Welcome to your School Board</h2>
          <p className="text-black font-normal text-center">
            Have all school activities at the tip of your hand. Get direct
          </p>
        </div>
      </div>

      <form className="h-screen lg:h-auto flex flex-col justify-center gap-3 lg:w-1/2 lg:pl-24 pt-24 lg:pt-auto bg-[url('../../../public/BlogBag.jpg')] bg-no-repeat bg-center bg-cover lg:bg-none px-6 lg:px-auto">
        <div className="lg:hidden flex flex-col gap-4 items-center pb-12 lg:pb-0">
          <img className="h-12 w-12" src={logo} alt="" />
          <h2 className="lg:hidden text-lg text-black text-center">
            Welcome to your School Board
          </h2>
        </div>

        <h2 className="lg:text-3xl text-2xl text-center ">Create an account</h2>
        <div className="flex flex-col gap-3 items-start">
          <label htmlFor="name" className="font-semibold">
            Full Name
          </label>
          <input
            className=" rounded-md lg:border-2 p-2 lg:w-[400px] w-full"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-3 items-start">
          <label htmlFor="regnumber" className="font-semibold">
            Department
          </label>
          <input
            className=" rounded-md lg:border-2 p-2 lg:w-[400px] w-full"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-3 items-start">
          <label htmlFor="regnumber" className="font-semibold">
            Registration Number
          </label>
          <input
            className=" rounded-md lg:border-2 p-2 lg:w-[400px] w-full"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-3 items-start">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            className=" rounded-md lg:border-2 p-2 lg:w-[400px] w-full"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-3 items-start">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            className=" rounded-md lg:border-2 p-2 lg:w-[400px] w-full"
            type="password"
            required
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-[#019541] rounded-md p-2 px-4 text-white lg:w-[400px] text-center w-full mt-4"
        >
          Start onboarding
        </button>
        <p className="font-thin text-justify">
          Already have an account?{" "}
          <span className="text-green-600 font-semibold">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
