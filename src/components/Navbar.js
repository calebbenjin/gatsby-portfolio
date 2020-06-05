import React from "react"
import logo from "../assets/logo1.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
// import Logo from './Logo'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo" styleClass="nav-links" />  
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks> 
      </div>
    </nav>
  )
}

export default Navbar
