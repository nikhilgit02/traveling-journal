import React from "react";
import pin from "./images/Fill 219.svg"

export default function Stack(props){
    return(
        <div className="stack">
            <div>
            <img src={props.item.imgUrl} className="main-img"/>
            </div>
            <div className="stack-detail">
            <div className="stack-main-location"><img src={pin} className="pin-img"/>
            <p className="stack-country">{props.item.location}</p>
            <a href={props.item.locationUrl}>View on Google Maps</a>
            </div>
            <h3 className="stack-title">{props.item.name}</h3>
            <p className="stack-date">{props.item.startDate} - {props.item.endDate}</p>
            <p className="stack-description">{props.item.description}</p>
            </div>
        </div>
    )
}