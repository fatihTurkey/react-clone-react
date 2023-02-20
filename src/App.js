import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// Components
import Header from "./components/Header"

// Pages
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import PrivateRoute from "./components/PrivateRoute"
import CreateListing from "./CreateListing"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/create-listing" element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListing />}></Route>
          </Route>
        </Routes>
      </Router>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </>
  )
}

export default App
