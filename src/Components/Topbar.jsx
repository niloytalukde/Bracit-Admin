import search from "../assets/search.svg"
import fullscreen from "../assets/fullscreen_icon.svg"
import notification from "../assets/notification-bell.svg"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Topbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-4 md:px-8 border-b border-black/90">
      {/* Left: Title */}
      <div>
        <h2 className="text-xl font-semibold">Student</h2>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="h-6 w-6 text-gray-800" />
          ) : (
            <FaBars className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Right Section */}
      <div
        className={`flex flex-col md:flex-row items-center gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-50 border-t md:border-none transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {/* Search Bar */}
        <div className="flex items-center border pl-3 pr-2 gap-2 bg-white border-gray-500/30 h-[42px] rounded-full w-full sm:w-72">
          <img src={search} alt="search icon" className="h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm bg-transparent"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <img src={fullscreen} alt="fullscreen" className="h-6 w-6 cursor-pointer" />
          <img src={notification} alt="notification" className="h-6 w-6 cursor-pointer" />
          <img
            alt="user profile"
            className="w-10 h-10 border rounded-full object-cover"
            src="https://source.unsplash.com/40x40/?portrait?1"
          />
        </div>
      </div>
    </div>

  );
};

export default Topbar;
