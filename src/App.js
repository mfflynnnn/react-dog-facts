import React from "react";
import "./App.css";
import DogSearch from "./DogSearch.js";

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Cute Dogs</h1>
          <h2>Cute pictures of cute {props.breed}s being cute</h2>
        </header>
        <DogSearch defaultBreed="boxer" />
      </div>
    </div>
  );
}

export default App;
