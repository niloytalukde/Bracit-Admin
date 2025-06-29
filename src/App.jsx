import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Login from "./Pages/Login";
import Advising from "./Pages/Advising";
import Schedule from "./Pages/Schedule";
import ScholarshipHistory from "./Pages/ScholarshipHistory";
import CourseDrop from "./Pages/CourseDrop";
import SemesterDrop from "./Pages/SemesterDrop";
import DepartmentChange from "./Pages/DepartmentChange";
import Grades from "./Pages/Grades";
import Probation from "./Pages/Probation";
import Payslip from "./Pages/Payslip";

const App = () => {
  const [login, setLogin] = useState(false);
  const location = useLocation();

  // Check if current path is login page
  const isLoginPage = location.pathname === "/";

  return (
    <div>
      {isLoginPage ? (
        <Routes>
          <Route path="/" element={<Login setLogin={setLogin} />} />
        </Routes>
      ) : (
        <div className="grid grid-cols-12 min-h-screen">
          {/* Sidebar */}
          <div className="col-span-2">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="col-span-10">
            <Topbar />
            <div className="p-4">
              <Routes>
                <Route path="/advising" element={<Advising />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/scholarship-history" element={<ScholarshipHistory />} />
                <Route path="/course-drop" element={<CourseDrop />} />
                <Route path="/semester-drop" element={<SemesterDrop />} />
                <Route path="/department-change" element={<DepartmentChange />} />
                <Route path="/grades" element={<Grades />} />
                <Route path="/probation" element={<Probation />} />
                <Route path="/payslip" element={<Payslip />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
