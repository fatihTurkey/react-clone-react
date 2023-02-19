import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import React, { useEffect } from "react"
import { toast } from "react-toastify"
import { db } from "../firebase"
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore"
import { useNavigate } from "react-router"

function OAuth() {
  const navigate = useNavigate()
  async function onGoogleClick() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Check for the user
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not authorize with Google")
      console.log(error)
    }
  }

  return (
    <button onClick={onGoogleClick} className="w-full bg-red-600 my-3 text-white py-4 px-7 font-bold  uppercase" type="button">
      Continue With Google
    </button>
  )
}

export default OAuth
