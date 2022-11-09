import React from "react";

import Search from "./Search.js";
import Footer from "./Footer.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="container page-wrap">
          <Search />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
