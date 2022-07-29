import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <strong>Listen</strong>
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
