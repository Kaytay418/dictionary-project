import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <strong>Example:</strong>
        <div className="example">{props.example}</div>
      </div>
    );
  } else {
    return null;
  }
}
