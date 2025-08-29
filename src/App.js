import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/home1';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Courses from './Components/Courses/courses';
import Contact from './Components/Contact/contact';
import Business from './Components/Home/Business';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </Router>
  );
}

export default App;




