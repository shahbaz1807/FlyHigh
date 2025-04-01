import React, { useEffect, useState } from "react";
import NotesCard from "../components/notes/NotesCard";
import { BsPlus } from "react-icons/bs";
import AddNote from "../components/notes/AddNote";
import ViewNote from "../components/notes/ViewNote";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Loader from "../components/loader/Loader";
import { IoSparkles } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import EditNote from "../components/notes/EditNote";

const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addNote, setAddNote] = useState(false);
  const [viewNote, setViewNote] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filter");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [noteView, setNoteView] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [editPopup, setEditPopup] = useState(false);
  const [editData, setEditData] = useState(null);

  const headers = {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTEwZDdiYmNiM2I2NWM2MmYzM2QzNiIsImVtYWlsIjoic2hhaGJhemFuc2FyaTgxOTlAZ21haWwuY29tIiwidXNlcm5hbWUiOiJTaGFoYmF6X0NvZGVyIiwiaWF0IjoxNzQyOTgxMTY2LCJleHAiOjE3NDM1ODU5NjZ9.K74NBmMFM64SrXOEgPwdHVUFWwMcm4lAXA3mWfPXAJ8",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (order) => {
    setSelectedOption(order);
    setFilteredNotes(
      [...filteredNotes].sort((a, b) =>
        order === "Newest"
          ? new Date(b.createdAt) - new Date(a.createdAt)
          : new Date(a.createdAt) - new Date(b.createdAt),
      ),
    );
    toggleDropdown();
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filtered = allNotes.filter((note) =>
      note.title.toLowerCase().includes(value),
    );

    setFilteredNotes(filtered);
  };

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/api/notes/get-notes", {
        headers,
      });
      setAllNotes(res.data.data);
      setFilteredNotes(res.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ToastContainer position="top-right" theme="light" />
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-worksans text-5xl font-medium text-primary">
              Notes
            </h1>
            <p className="text-zinc-400">
              With all of the styling tool options available in today's market
            </p>
          </div>

          <div>
            <button
              onClick={() => setAddNote(!addNote)}
              className="group cursor-pointer outline-none duration-300 hover:rotate-90"
            >
              <svg
                className="fill-none stroke-primary duration-300 group-hover:fill-teal-800 group-active:fill-teal-600 group-active:stroke-teal-200 group-active:duration-0"
                viewBox="0 0 24 24"
                height="50px"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeWidth="1.5"
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                ></path>
                <path strokeWidth="1.5" d="M8 12H16"></path>
                <path strokeWidth="1.5" d="M12 16V8"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10 flex justify-between gap-10">
          <div className="w-full">
            {/* Search Input */}
            <input
              className="custom-input w-full transform rounded-lg border border-gray-300 bg-gray-100 px-6 py-2 text-black shadow-sm transition duration-300 ease-in-out hover:border-blue-300 hover:shadow-lg focus:outline-blue-300"
              placeholder="Search notes by title..."
              type="text"
              value={searchText}
              onChange={handleSearch}
            />
          </div>
          <div className="flex gap-5">
            <button className="h-full rounded-lg border border-zinc-600 bg-primary px-3">
              <img src="/icons/calendar.png" className="w-[75px]" alt="icon" />
            </button>
            <div>
              <div className="relative inline-block h-full text-left">
                <button
                  type="button"
                  className="shadow-xs z-50 inline-flex h-full w-36 items-center justify-between gap-x-1.5 rounded-lg bg-white px-3 py-2 font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={toggleDropdown}
                >
                  {selectedOption}
                  <svg
                    className={`-mr-1 size-5 text-gray-400 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    className="absolute right-0 z-50 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
                    role="menu"
                  >
                    <div className="py-1">
                      <button
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        onClick={() => handleSelect("Newest")}
                      >
                        Newest
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        onClick={() => handleSelect("Oldest")}
                      >
                        Oldest
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="h-[70vh] w-full">
            <Loader />
          </div>
        ) : allNotes.length > 0 ? (
          <div className="mt-10 grid grid-cols-3 gap-4">
            {Array.isArray(filteredNotes) && filteredNotes.length > 0 ? (
              filteredNotes.map((note, index) => (
                <NotesCard
                  key={index}
                  note={note}
                  setNoteView={setNoteView}
                  setViewNote={setViewNote}
                  viewNote={viewNote}
                />
              ))
            ) : (
              <div className="flex w-64 flex-col items-center rounded-xl border border-[#404040] bg-black bg-gradient-to-b px-4 py-10 shadow-sm transition-all duration-300 hover:shadow-md">
                <h1 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                  Note not found
                </h1>
                <p className="mt-3 text-center font-medium text-gray-500 dark:text-gray-400">
                  Start by adding your first note!
                </p>

                <button
                  onClick={() => setAddNote(true)}
                  className="mt-6 flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 font-medium text-primary transition-all duration-300"
                >
                  <BsPlus className="h-4 w-4" />
                  Add Note
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6 flex w-64 flex-col items-center rounded-xl border border-[#404040] bg-black bg-gradient-to-b px-4 py-10 shadow-sm hover:shadow-md">
            <div className="group relative mb-6">
              <div className="to-primary-foreground/20 absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 opacity-80 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <FiFileText className="relative h-14 w-14 text-primary/80 transition-colors duration-200 group-hover:text-primary" />
              <IoSparkles className="absolute -right-2 -top-2 h-5 w-5 animate-pulse text-yellow-400" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
              No notes{" "}
              <span
                onClick={() => setAddNote(true)}
                className="group relative inline-block cursor-pointer text-primary"
              >
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
                added
              </span>
            </h1>

            <p className="mt-3 text-center font-medium text-gray-500 dark:text-gray-400">
              Start by adding your first note!
            </p>

            <button
              onClick={() => setAddNote(true)}
              className="mt-6 flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 font-medium text-primary transition-all duration-300"
            >
              <BsPlus className="h-4 w-4" />
              Add Note
            </button>
          </div>
        )}
      </div>
      {addNote && <AddNote setAddNote={setAddNote} getData={getData} />}
      {viewNote && (
        <ViewNote
          setViewNote={setViewNote}
          noteView={noteView}
          getData={getData}
          setEditPopup={setEditPopup}
          setEditData={setEditData}
        />
      )}
      {editPopup && (
        <EditNote
          editData={editData}
          setEditPopup={setEditPopup}
          getData={getData}
          setViewNote={setViewNote}
        />
      )}
    </>
  );
};

export default Notes;
