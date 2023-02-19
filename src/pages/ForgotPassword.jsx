import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import OAuth from "../components/OAuth"

function ForgotPassword() {
  const [email, setEmail] = useState("")

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email was sent")
    } catch (error) {
      toast.error("Could'not send reset to password")
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input className="w-full my-2 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />

            <div className="flex justify-between">
              <p>
                Don't have an account? <Link to="/sign-up">Register</Link>
              </p>
              <p>
                <Link to="/sign-in">Sign in instead</Link>
              </p>
            </div>
            <button className="w-full bg-blue-600 my-3 text-white py-4 px-7 font-bold  uppercase" type="submit">
              SEND RESET PASSWORD
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

export default ForgotPassword
