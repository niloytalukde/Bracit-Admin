import React from "react";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";

const App = () => {
  return (
    <div className="grid grid-cols-12">
      {/* Side Bar  */}
      <div className="col-span-2">
        <Sidebar></Sidebar>
      </div>
      {/* Right  */}
      <div className="col-span-10 ">
        <Topbar></Topbar>
      </div>
    </div>
  );
};

export default App;
