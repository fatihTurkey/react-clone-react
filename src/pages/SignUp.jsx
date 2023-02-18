import React, { useEffect, useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import OAuth from "../components/OAuth"

function SignUp() {
  const [showpassword, setShowpassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const { name, email, password } = formData

  function onChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input className="w-full my-2 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" id="name" type="text" value={name} onChange={onChange} placeholder="Name" />

            <input className="w-full my-2 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" id="email" type="email" value={email} onChange={onChange} placeholder="Email Address" />

            <div className="relative">
              <input className="w-full px-4 my-2 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" id="password" type={showpassword ? "text" : "password"} value={password} onChange={onChange} placeholder="Password" />
              {showpassword ? <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowpassword((prev) => !prev)} /> : <AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowpassword((prev) => !prev)} />}
            </div>
            <div className="flex justify-between">
              <p>
                Have an account? <Link to="/sign-in">Sign in</Link>
              </p>
              <p>
                <Link to="/forgot-password">Forgot Password</Link>
              </p>
            </div>
          </form>
          <button className="w-full bg-blue-600 my-3 text-white py-4 px-7 font-bold  uppercase" type="submit">
            Sign up
          </button>
          <div className="my-4 before:border-t before:flex-1 flex">
            <p className="text-center font-bold mx-4">OR</p>
          </div>
          <OAuth />
        </div>
      </div>
    </section>
  )
}

export default SignUp
