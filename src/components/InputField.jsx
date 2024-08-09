import React, { useRef, useState } from "react";
import Plus from "../assets/plus.svg";
import { Link } from "react-router-dom";

const InputField = ({ placeholder, label, setFocusedField, focusedField }) => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setText(event.target.value);
  };

  const handleFocus = (label) => {
    setFocusedField(label);
  };

  return (
    <div className="flex items-center w-full h-full">
      <div className="w-12">
        {label === "title" && text.length > 0 ? (
          <p className={`text-primary`}>Title</p>
        ) : (
          <div
            className={`${
              label === focusedField ? "flex" : "hidden"
            } h-8 w-8 rounded-full border border-primary flex justify-center items-center mr-3`}
          >
            <svg
              className="text-primary"
              fill="currentColor"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
            </svg>
          </div>
        )}
      </div>
      <textarea
        ref={textareaRef}
        className={`w-full outline-none resize-none px-4 mb-3 ${
          placeholder === "Title"
            ? "text-[2.5rem] font-serif pt-2 placeholder-text-light"
            : "text-xl"
        } ${
          focusedField === label && label === "title" ? " border-l-[1px]" : ""
        }`}
        rows="1"
        placeholder={placeholder}
        value={text}
        onInput={handleInput}
        onFocus={() => handleFocus(label)}
      />
    </div>
  );
};

export default InputField;
