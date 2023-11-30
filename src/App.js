import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Login from "./components/Login/LoginPage"
import ResetPassword from "./components/Login/ResetPassword"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      {load ? null : (
        <div className="App" id="scroll">
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/project"
              element={
                <>
                  <Navbar />
                  <Projects />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/resume"
              element={
                <>
                  <Navbar />
                  <Resume />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Reset" element={<ResetPassword />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          
        </div>
      )}
    </Router>
  );
}

export default App;
