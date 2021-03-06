import React from 'react';
import './App.css';
import {Route , Routes} from "react-router-dom";
import { Home, Category, Rules , Quiz, Score, Login, Signup} from "../src/page";
import { Navbar} from "../src/component"

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
