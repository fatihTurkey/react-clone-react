import React, { useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"

function Header() {
  const location = useLocation()

  const classNames = "block py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent"
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" className="h-5 cursor-pointer" alt="Realtor Logo" />
        </div>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <NavLink className={({ isActive }) => (isActive ? classNames + "text-black border-b-red-500" : classNames)} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? classNames + "text-black border-b-red-500" : classNames)} to="/offers">
                Offers
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? classNames + "text-black border-b-red-500" : classNames)} to="/sign-in">
                Sign in
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
