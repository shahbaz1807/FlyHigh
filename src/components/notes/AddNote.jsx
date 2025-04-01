import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNote = ({ setAddNote, getData }) => {
  const [quillInstance, setQuillInstance] = useState(null);
  const editorRef = useRef(null);

  const navigate = useNavigate();

  const headers = {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTEwZDdiYmNiM2I2NWM2MmYzM2QzNiIsImVtYWlsIjoic2hhaGJhemFuc2FyaTgxOTlAZ21haWwuY29tIiwidXNlcm5hbWUiOiJTaGFoYmF6X0NvZGVyIiwiaWF0IjoxNzQyOTgxMTY2LCJleHAiOjE3NDM1ODU5NjZ9.K74NBmMFM64SrXOEgPwdHVUFWwMcm4lAXA3mWfPXAJ8",
  };

  const [data, setData] = useState({
    title: "",
    content: "",
    background: "bg-white",
  });

  const addNote = async () => {
    console.log(data);
    if (data.content === "") {
      return toast.warning("Oops! Your note is empty.");
    }

    axios
      .post("http://localhost:3000/api/notes/add-note", data, { headers })
      .then((res) => {
        toast.success(res.data.message);

        // Reset data state
        setData({
          title: "",
          content: "",
          background: "bg-white",
        });

        // Reset Quill editor content
        if (quillInstance) {
          quillInstance.root.innerHTML = ""; // Clear editor
        }
          getData()
        setAddNote(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const handleClick = (value) => {
    setData((prevData) => ({
      ...prevData,
      background: value,
    }));

    if (quillInstance) {
      quillInstance.root.style.background = getComputedStyle(
        document.querySelector(`.${value.split(" ")[1]}`),
      ).background;
    }
  };

  useEffect(() => {
    if (!editorRef.current) return;

    const quill = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", { color: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link"],
          ["clean"],
        ],
      },
    });
    setQuillInstance(quill);

    quill.on("text-change", () => {
      const delta = quill.getContents();
      let extractedTitle = "";
      let extractedTitleHtml = "";

      for (let op of delta.ops) {
        if (op.attributes?.header === 1 || op.attributes?.header === 2) {
          extractedTitle = op.insert.trim();
          extractedTitleHtml = `<h${op.attributes.header}>${extractedTitle}</h${op.attributes.header}>`;
          break;
        }
      }

      if (!extractedTitle) {
        const textContent = quill.getText().replace(/\n+/g, " ").trim();
        extractedTitle = textContent.split(/\s+/).slice(0, 5).join(" ");
        extractedTitleHtml = extractedTitle;
      }

      setData((prevData) => ({
        ...prevData,
        title: extractedTitleHtml,
        content: quill.root.innerHTML,
      }));
    });

    return () => {
      setQuillInstance(null);
    };
  }, []);

  const downloadNote = () => {
    const blob = new Blob([data.content], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "note.html"; // Change to "note.txt" for plain text
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const gradients = [
    { name: "Red", class: "from-red-500 to-red-800" },
    { name: "Blue", class: "from-primary to-blue-400" },
    { name: "Yellow", class: "from-yellow-400 to-yellow-600" },
    { name: "Teal", class: "from-teal-500 to-teal-800" },
    { name: "Orange", class: "from-orange-600 to-orange-800" },
    { name: "Dark Blue", class: "from-blue-600 to-blue-800" },
    { name: "White", class: "from-white to-white" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1f1f1a] backdrop-blur-sm">
      <div className="min-h-[70vh] w-[80%] max-w-[800px] rounded-xl bg-[#1b1b1b] border border-gray-700 p-4 px-5 py-5">
        <h1 className="font-worksans text-4xl font-medium text-primary">
          Write a new note
        </h1>
        <p className="text-zinc-400">
          Title will be taken from the first H1/H2 header or first few words.
        </p>
        <div
          className={`mt-2 h-[500px] overflow-hidden rounded-md border-none pb-[44px] text-zinc-900 ${data.background}`}
        >
          <div ref={editorRef} className="h-full w-full p-2" />
        </div>

        <div className="mt-9">
          <h1 className="font-worksans text-2xl font-medium text-primary">
            Select Background
          </h1>
          <div className="mt-5 grid grid-cols-8 gap-4">
            {gradients.map((gradient, index) => (
              <div
                key={index}
                onClick={() =>
                  handleClick(`bg-gradient-to-br ${gradient.class}`)
                }
                style={{ boxShadow: "0px 0px 5px rgba(255, 255, 255 , 0.2)" }}
                className={`h-[60px] w-[60px] cursor-pointer rounded-md bg-gradient-to-br ${gradient.class}`}
              ></div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex gap-3">
          <button className="rounded-md bg-primary px-5 py-2" onClick={addNote}>
            Save
          </button>
          <button
            className="rounded-md border-2 border-primary px-5 py-2 text-primary transition-all duration-150 hover:bg-primary hover:text-white"
            onClick={downloadNote}
          >
            Download
          </button>
          <button
            className="rounded-md border-2 border-primary px-5 py-2 text-primary transition-all duration-150 hover:bg-primary hover:text-white"
            onClick={() => setAddNote(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
