import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      {!login ? (
        <Routes>
          <Route path="/" element={<Login setLogin={setLogin} />} />
        </Routes>
      ) : (
        <div className="grid grid-cols-12 min-h-screen">
          {/* Side Bar */}
          <div className="col-span-2">
            <Sidebar />
          </div>

          {/* Right */}
          <div className="col-span-10">
            <Topbar />
            {/* Add your main content here */}
            <div className="p-4">
              <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
