import React from "react";
import './Navbar.css';
import logo from '../../assets/Logo.png'; // Correctly import the image
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return (
        <div className="navbar-container display-flex">
            <div className="Logo-wrapper">
                <img src={logo} alt="Logo" />
            </div>
            <div className="search-wrapper">
                <div className="input-search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: '10px' }} />
                    <input
                        className="form-control form-control-sm shadow-none"
                        type="text"
                        placeholder="Search Trademark Here e.g., Mickey Mouse"
                        style={{ border: 'none' }} // Remove border
                    />
                </div>
                <button className="button">Search</button>
            </div>
          
            <button className="apply-btn"> Apply for Trademark</button>
            
        </div>

        
    );
}

export default Navbar;
