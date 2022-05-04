import React from "react";
import "./style.css";

function Button({ id, text, onClick }) {
  return (
    <button id={id} className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
