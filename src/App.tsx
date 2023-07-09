import React from 'react';
import Login from './components/login/SignupCompany';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupCompany from './components/login/SignupCompany';
import SignupUser from './components/login/SignupUser';
import Signin from './components/login/Login';
import About from './components/about/About';

import IntershipHome from './components/internship/IntershipHome';
import Intern from './components/intern/Intern';
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import AboutCard from './components/about/AboutCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/common/header/Header"
import Home from "./components/home/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/intership" element={<Layout><IntershipHome /></Layout>} />
        <Route path="/intern" element={<Layout><Intern /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/company-signup" element={<SignupCompany />} />
        <Route path="/user-signup" element={<SignupUser />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default App;

