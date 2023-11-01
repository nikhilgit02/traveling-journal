import React from "react";
import logo from "./images/Fill 213.svg"

export default function Navbar(){
    return(
        <nav>
            <img src={logo}/>
            <h4>My Travel Journal</h4>
        </nav>
    )
}