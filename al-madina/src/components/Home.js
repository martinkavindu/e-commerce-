import React from "react";
import {Navbar} from "../components/Navbar";
import{Products} from "../components/Products"
function Home(){
    return(
        <div className="wrapper">
<Navbar/>
<Products/>
        </div>
    )
}
export default Home;