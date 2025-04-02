import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Routine from "./pages/Routine";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <div className="flex">
        {/* Conditionally render Sidebar and Header based on the current route */}
        {window.location.pathname !== "/" && (
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
        {window.location.pathname === "/" && (
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
