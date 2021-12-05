import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Search() {
  const [breed, setBreed] = useState("French Bulldog");
  const apiUrl = `https://dog.ceo/api/breed/${breed}/images`;

  function callApi(event) {
    event.preventDefault();
  }

  return (
    <form className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <input type="search" placeholder="Search for a breed..." />
      </div>
      <button className="btn btn-primary mb-2">Search</button>
    </form>
  );
}

/*TASKS
- Add prevent default
*/
