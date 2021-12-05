import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DogSearch.css";

export default function DogSearch(props) {
  const [breed, setBreed] = useState(props.defaultBreed);
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState(null);

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://dog.ceo/api/breed/${breed}/images`;
    console.log("url", apiUrl);
    axios.get(apiUrl).then(handleResponse);

    // let response = await axios.get(apiUrl);
    // handleResponse(response);
  }

  function handleBreedChange(event) {
    setBreed(event.target.value);
  }

  function handleResponse(response) {
    console.log("response", response);
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a breed..."
              onChange={handleBreedChange}
              defaultValue={props.defaultBreed}
              className="mx-sm-3 mb-2"
            />
            <button type="submit" className="btn btn-primary mb-2">
              Search
            </button>
          </form>
        </section>
        <Results results={results} breed={breed} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
