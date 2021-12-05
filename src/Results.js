import React from "react";

export default function Results(props) {
  console.log("props results", props);
  if (props.results && props.results.message && props.results.message.length) {
    return (
      <div className="row Results">
        {props.results.message.map(function (message, index) {
          if (index <= 15) {
            return (
              <div className="col-4" key={index}>
                <img src={message} className="img-fluid" alt="" />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
