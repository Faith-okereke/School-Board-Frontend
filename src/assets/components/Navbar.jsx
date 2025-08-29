import { Link } from "react-router-dom";
import avatar from "../../../public/image-avatar.webp";
import NACOSLogo from "../../../public/NACOS_LOGO.png";
const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center bg-[#019541] p-3 text-white px-8 sticky h-20  top-0 z-30">
      <Link to="/">
        <img className="w-10 h-10 lg:h-16 lg:w-16" src={NACOSLogo} alt="logo" />
      </Link>
      <nav className="flex lg:gap-10 gap-3">
        <Link to="/events">Events</Link>
        <Link to="/announcements">Announcements</Link>
      </nav>
      <Link to="/login">
        <img
          className="w-10 h-10 lg:w-12 lg:h-12 border-2 border-white rounded-full"
          src={avatar}
          alt="profile image"
        />
      </Link>
    </div>
  );
};

export default Navbar;
