import React from "react";
import {Navbar} from "../components/Navbar";
import{Products} from "../components/Products"
import "../css/Home.css"
const Home =()=>{
    return(
        <div className="wrapper">
<Navbar/>
<Products/>
        </div>
    )
}
export default Home