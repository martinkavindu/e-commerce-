import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="Navbox">
            <div className="leftside">
                <img src={logo} alt=""/> 

            </div>
            <div className="rightside"> 
            <Link to="/signup" className="navlinks">SIGN UP</Link>
            <Link to="/login" className="navlinks">LOGIN</Link>
            </div>
            
        </div>
    )
}
export default Navbar;