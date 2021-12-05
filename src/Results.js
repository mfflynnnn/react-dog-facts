import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.message}</h3>
      </div>
    );
  } else {
    return null;
  }
}
