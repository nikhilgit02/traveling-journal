import React from "react";
import pin from "./images/Fill 219.svg"

export default function Stack(props){
    return(
        <div>
            <img src={props.item.imgUrl}/>
            <img src={pin}/>
            <p>{props.item.location}</p>
            <a href="">View on Google Maps</a>
            <h3>{props.item.name}</h3>
            <p><b>{props.item.date}</b></p>
            <p>{props.item.description}</p>

        </div>
    )
}