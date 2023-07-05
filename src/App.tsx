import React from 'react';
import Login from './components/login/SignupCompany';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupCompany from './components/login/SignupCompany';
import SignupUser from './components/login/SignupUser';
import Signin from './components/login/Login';
import About from './components/about/About';

import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import AboutCard from './components/about/AboutCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/common/header/Header"
import Home from "./components/home/Home"
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
        <Route   path='/' element={<Home/>} />
        {/* <Route path="/company-signup" element={<SignupCompany />} />
        <Route path="/user-signup" element={<SignupUser />} />
        <Route path="/signin" element={<Signin />} /> */}
          <Route  path='/about' element={<About/>} />
          <Route  path='/courses' element={<CourseHome/>} />
          <Route  path='/team' element={<Team/>} />
          <Route  path='/pricing' element={<Pricing/>} />
          <Route  path='/journal' element={<Blog/>} />
          <Route  path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

