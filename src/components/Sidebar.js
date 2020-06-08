import React from "react"
import Links from "../constants/links"
import logo from "../assets/logo1.png"
import SocialLinks from "../constants/socialLinks"
import { FaArrowRight } from "react-icons/fa"

const Sidebar = ({isOpen, toggleSidebar}) => {
  return <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
    <img src={logo} alt="Logo" styleClass="nav-links logo" />  
    <button className="close-btn" onClick={toggleSidebar}>
      <FaArrowRight />
    </button>
    <div className="side-container">
      <Links styleClass={isOpen ? "sidebar-links" : ""} />
      <SocialLinks styleClass={isOpen ? "sidebar-icons" : ""} />
    </div>
  </aside>
}

export default Sidebar;
