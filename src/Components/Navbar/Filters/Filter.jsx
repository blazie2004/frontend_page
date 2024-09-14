import React from 'react';
import './Filter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrademark, faEarthAmericas, faCopyright, faUser } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../../../assets/Screenshot 2024-09-14 113508.png'; // Correct import of image

function Filter() {
    return (
        <div className="Filters display-flex">
            {/* Trademarks */}
            <div className="logo-wrapper">
                <div className="logo">
                    <FontAwesomeIcon icon={faTrademark} />  
                </div>
                <span className="text-prop">Trademarks</span>
            </div>

            {/* Owners */}
            <div className="logo-wrapper">
                <div className="logo">
                    <FontAwesomeIcon icon={faUser} />
                </div> 
                <span className="text-prop">Owners</span>
            </div>

            {/* Logos */}
            <div className="logo-wrapper">
                <div className="logo">
                    <img src={logoImage} alt="Logo" />  {/* Display the imported image */}
                </div>
                <span  className="text-prop">Logos</span>
            </div>

            {/* Internet and Brand Search */}
            <div className="logo-wrapper">
                <div className="logo">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <span className="text-prop">Internet and Brand Search</span>
            </div>

            {/* Copyright */}
            <div className="logo-wrapper">
                <div className="logo">
                    <FontAwesomeIcon icon={faCopyright} />
                </div>  
                <span className="text-prop">Copyright</span>
            </div>
        </div>
    );
}

export default Filter;
