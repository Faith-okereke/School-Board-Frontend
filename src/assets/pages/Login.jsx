import { Link, useNavigate } from "react-router";
import logo from "../../../public/NACOS_LOGO.png";
import loginBg from "../../../public/BlogBag.jpg";
import { useState } from "react";
const Login = () => {
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
        className="lg:w-1/2 relative bg-gradient-to-r from-green-500 to-blue-500 lg:h-screen"
      >
        <div className="hidden lg:flex lg:absolute static top-1/3 left-0 px-12 -translate-1/2 z-1 flex-col gap-3 items-center">
          <img className="h-24 w-24" src={logo} alt="" />
          <h2 className="text-3xl text-black">Welcome to your School Board</h2>
          <p className="text-black font-normal text-center">
            Have all school activities at the tip of your hand. Get direct
            information from the course instructor
          </p>
        </div>
      </div>

      <form className="h-screen lg:h-auto flex flex-col justify-center gap-3 lg:w-1/2 lg:pl-24 pt-24 lg:pt-auto bg-[url('../../../public/BlogBag.jpg')] bg-no-repeat bg-center bg-cover lg:bg-none px-6 lg:px-auto">
        <div className="lg:hidden flex flex-col gap-4 items-center pb-12">
          <img className="h-12 w-12" src={logo} alt="" />
          <h2 className="lg:hidden text-lg text-black text-center">
            Welcome to your School Board
          </h2>
        </div>

        <h2 className="lg:text-3xl text-2xl text-center ">
          Log in to your account
        </h2>

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
          Sign in
        </button>
        <p className="font-thin text-justify">
          Don't have an account?{" "}
          <span className="text-green-600 font-semibold">
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
