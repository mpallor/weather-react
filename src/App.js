import React from "react";

import Weather from "./Weather.js";
import Footer from "./Footer.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
