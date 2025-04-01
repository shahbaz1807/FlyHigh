import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa6";
import DOMPurify from "dompurify";

const NotesCard = ({ setViewNote, viewNote, note, index, setNoteView }) => {

  return (
    <div
      onClick={() => {
        setViewNote(!viewNote), setNoteView(note);
      }}
      key={index}
      className="flex h-full w-full max-w-md flex-col overflow-hidden rounded-xl transition-all duration-300"
    >
      <div className="relative">
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${note.background} overflow-hidden rounded-xl opacity-90`}
        ></div>

        {/* Backdrop blur layer */}
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-[1px]"></div>

        {/* Dashed border */}
        <div className="pointer-events-none absolute inset-0 m-1 rounded-xl border-2 border-dashed border-white/40"></div>

        {/* Content container */}
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="pb-2">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800">
              {note.title}
            </h2>
            <div className="mt-2 h-px w-full bg-zinc-700/20"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg py-3">
            <div
              className="note-custom-html leading-relaxed text-zinc-700"
              dangerouslySetInnerHTML={{
                __html:
                  note.content.length > 600
                    ? `${note.content.slice(0, 600)}...`
                    : note.content,
              }}
            ></div>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-zinc-800">
              <FaRegCalendarCheck className="h-4 w-4" />
              <span className="text-sm font-medium">
                {new Date(note.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
