import React from "react";
import { Link } from "react-router-dom";
import image from '../images/logo.png';
export const Navbar =()=>{
    return(
        <div className="Navbox">
            <div className="leftside">
                <img src={image} alt=""/> 

            </div>
            <div className="rightside"> 
            <Link to="/signup" className="navlinks">SIGNUP</Link>
            <Link to="/login" className="navlinks">LOGIN</Link>
            </div>
            
        </div>
    )
}
