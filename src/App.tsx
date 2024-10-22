import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Reflections from './pages/Reflections';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;