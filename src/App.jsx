import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Advising from "./Pages/Advising";
import Schedule from "./Pages/Schedule";
import ScholarshipHistory from "./Pages/ScholarshipHistory";
import CourseDrop from "./Pages/CourseDrop";
import SemesterDrop from "./Pages/SemesterDrop";
import DepartmentChange from "./Pages/DepartmentChange";
import Grades from "./Pages/Grades";
import Probation from "./Pages/Probation";
import Payslip from "./Pages/Payslip";

// Layout for authenticated routes
const DashboardLayout = ({ children }) => (
  <div className="grid grid-cols-12 min-h-screen">
    <div className="col-span-2">
      <Sidebar />
    </div>
    <div className="col-span-10">
      <Topbar />
      <div className="p-4">{children}</div>
    </div>
  </div>
);

const App = () => {
  // const [login, setLogin] = useState(false);
  const [login, setLogin] = useState(() => {
    // get login status from localStorage
    return localStorage.getItem("isLoggedIn") === "true";
  });

  return (
    <Routes>
      <Route path="/" element={<Login setLogin={setLogin} />} />

      {login ? (
        <>
          <Route
            path="/advising"
            element={
              <DashboardLayout>
                <Advising />
              </DashboardLayout>
            }
          />
          <Route
            path="/schedule"
            element={
              <DashboardLayout>
                <Schedule />
              </DashboardLayout>
            }
          />
          <Route
            path="/scholarship-history"
            element={
              <DashboardLayout>
                <ScholarshipHistory />
              </DashboardLayout>
            }
          />
          <Route
            path="/course-drop"
            element={
              <DashboardLayout>
                <CourseDrop />
              </DashboardLayout>
            }
          />
          <Route
            path="/semester-drop"
            element={
              <DashboardLayout>
                <SemesterDrop />
              </DashboardLayout>
            }
          />
          <Route
            path="/department-change"
            element={
              <DashboardLayout>
                <DepartmentChange />
              </DashboardLayout>
            }
          />
          <Route
            path="/grades"
            element={
              <DashboardLayout>
                <Grades />
              </DashboardLayout>
            }
          />
          <Route
            path="/probation"
            element={
              <DashboardLayout>
                <Probation />
              </DashboardLayout>
            }
          />
          <Route
            path="/payslip"
            element={
              <DashboardLayout>
                <Payslip />
              </DashboardLayout>
            }
          />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
};

export default App;
