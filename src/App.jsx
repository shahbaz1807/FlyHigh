import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./components/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Notes from "./pages/Notes";
import Routine from "./pages/Routine";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
function App() {
  const location = useLocation();
  return (
    <>
      <div className="flex">
        {/* Conditionally render Sidebar and Header based on the current route */}
        {location.pathname !== "/" && (
          <>
            <Sidebar />
            <div className="w-full">
              <Header />
              <div className="px-7 py-5">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/notes" element={<Notes />} />
                  <Route path="/routine" element={<Routine />} />
                  <Route path="/todo" element={<Todo />} />
                </Routes>
              </div>
            </div>
          </>
        )}

        {/* Login page route */}
        {location.pathname === "/" && (
          <div className="w-full">
            <div className="px-7">
              <Routes>
                <Route path="/" element={<Login />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
