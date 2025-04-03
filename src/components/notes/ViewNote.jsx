import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa6";
import DOMPurify from "dompurify";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";

const ViewNote = ({
  setViewNote,
  noteView,
  getData,
  setEditPopup,
  setEditData,
}) => {
  // User Token
  const token = localStorage.getItem("token");
  
  const [deletePopup, setdeletePopup] = useState(false);

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const deleteNote = async () => {
    axios
      .delete(`https://fly-high-backend.vercel.app/api/notes/delete-note/${noteView._id}`, {
        headers,
      })
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
        getData();
        setViewNote(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const editPopup = () => {
    setEditPopup(true);
    setEditData(noteView);
  };

  return (
    <>
      {deletePopup ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1f1f1a] p-4 backdrop-blur-sm">
          <div className="group relative flex w-[450px] select-none flex-col items-center justify-center rounded-2xl border border-gray-800 bg-gray-800 p-4 shadow-lg">
            <div className="">
              <div className="flex-auto justify-center p-3 text-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="mx-auto flex h-12 w-12 items-center fill-red-500 text-gray-600 group-hover:animate-bounce"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <h2 className="py-4 text-xl font-bold text-gray-200">
                  Are you sure you?
                </h2>
                <p className="px-2 text-sm font-bold text-gray-500">
                  Do you really want to continue ? This process cannot be undone
                </p>
              </div>
              <div className="mt-2 space-x-1 p-2 text-center md:block">
                <button
                  onClick={() => setdeletePopup(false)}
                  className="mx-5 mb-2 rounded-full border-2 border-gray-600 bg-gray-700 px-5 py-2 text-sm font-medium tracking-wider text-gray-300 shadow-sm transition duration-300 ease-in hover:border-gray-700 hover:bg-gray-800 hover:shadow-lg md:mb-0"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteNote}
                  className="mx-5 ml-4 rounded-full border-2 border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm transition duration-300 ease-in hover:border-red-500 hover:bg-transparent hover:text-red-500 hover:shadow-lg"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setViewNote(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1f1f1a] p-4 backdrop-blur-sm"
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Gradient background - same as card */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${noteView.background} opacity-90`}
              ></div>

              {/* Backdrop blur layer */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

              {/* Dashed border */}
              <div className="pointer-events-none absolute inset-0 m-1 rounded-xl border-2 border-dashed border-white/40"></div>

              {/* Content container */}
              <div className="relative z-10 p-8">
                {/* Close button */}
                <button
                  className="absolute right-4 top-4 rounded-full bg-zinc-800 p-2 text-white hover:bg-zinc-700"
                  onClick={() => setViewNote(false)}
                >
                  <IoIosClose className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="pb-4">
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-800">
                    {noteView.title}
                  </h2>
                  <div className="mt-3 h-px w-full bg-zinc-700/20"></div>
                </div>

                {/* Content */}
                <div
                  className="note-custom-html scrollbar-hide max-h-[500px] overflow-y-auto leading-relaxed text-zinc-700"
                  dangerouslySetInnerHTML={{
                    __html: noteView.content,
                  }}
                ></div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 text-zinc-800">
                    <FaRegCalendarCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {new Date(noteView.createdAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setdeletePopup(true)}
                      className="rounded-full bg-zinc-800 p-3 text-white transition-all duration-300 hover:bg-zinc-700"
                    >
                      <RiDeleteBin5Fill className="h-5 w-5" />
                    </button>
                    <button
                      onClick={editPopup}
                      className="rounded-full bg-zinc-800 p-3 text-white transition-all duration-300 hover:bg-zinc-700"
                    >
                      <AiFillEdit className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewNote;
