import search from "../assets/search.svg"
import fullscreen from "../assets/fullscreen_icon.svg"
import notification from "../assets/notification-bell.svg"
const Topbar = () => {
  return (
    <div className="flex items-center mx-4  justify-between p-4 px-8 border-b border-black/90">
      <div>
        <h2 className="text-xl">Student</h2>
      </div>
      <div className="flex gap-4 items-center">
        <div class="flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-full">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Search"
            class="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
          />
        </div>
        <img src={fullscreen} alt="" className="h-6 w-6" />
        <img src={notification} alt="" className="h-6 w-6" />
        <img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://source.unsplash.com/40x40/?portrait?1" />
      </div>
    </div>
  );
};

export default Topbar;
