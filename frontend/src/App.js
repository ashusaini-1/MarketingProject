import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarHeader from "./component/header/Navbar";
import LoginForm from "./component/account/Signin";
import SignUpForm from "./component/account/Signup";
import Footer from "./component/header/Footer";
import StudentForm from "./component/student/studentForm";

const App = () => {
  return (
   
    <Router>
    <NavbarHeader/>
      <Routes>
      <Route path='/' element={<StudentForm/>}  />
        <Route path='/login' element={<LoginForm/>}  />
        <Route path='/signup' element={<SignUpForm/>}  />
       
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
