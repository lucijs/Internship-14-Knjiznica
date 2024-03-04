import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { books } from "./assets/data.js";
import Books from "./components/Books/Books.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Books books={books} />
    </>
  );
}

export default App;
