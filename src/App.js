import React from 'react';
import './App.css';
import {Route , Routes} from "react-router-dom";
import { Home, Category } from "../src/page";
import { Navbar} from "../src/component"

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-category" element={<Category />} />
        </Routes>
    </div>
  );
}

export default App;
