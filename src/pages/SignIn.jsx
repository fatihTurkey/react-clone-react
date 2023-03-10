import React, { useEffect, useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { toast } from "react-toastify"

function SignIn() {
  const navigate = useNavigate()
  const [showpassword, setShowpassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData

  function onChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if (userCredential.user) {
        navigate("/")
      }
    } catch (error) {
      toast.error("Bad user credentials")
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input className="w-full my-2 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" id="email" type="email" value={email} autoComplete="on" onChange={onChange} placeholder="Email Address" />

            <div className="relative">
              <input className="w-full px-4 my-2 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" id="password" type={showpassword ? "text" : "password"} value={password} onChange={onChange} placeholder="Password" autoComplete="on" />
              {showpassword ? <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowpassword((prev) => !prev)} /> : <AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowpassword((prev) => !prev)} />}
            </div>
            <div className="flex justify-between">
              <p>
                Don't have an account?
                <Link to="/sign-up">Register</Link>
              </p>
              <p>
                <Link to="/forgot-password">Forgot Password</Link>
              </p>
            </div>
            <button className="w-full bg-blue-600 my-3 text-white py-4 px-7 font-bold  uppercase" type="submit">
              Sign in
            </button>
            <div className="my-4 before:border-t before:flex-1 flex">
              <p className="text-center font-bold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn
