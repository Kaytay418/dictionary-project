import React from "react";
import "./Meaning.css";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div>
        <span className="word">Synonyms:</span>
        <ul className="synonyms">
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
