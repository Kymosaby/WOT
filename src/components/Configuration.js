import React from "react"
import "./Configuration.css"

export default function Configuration (props) {
    return(
        <section className = "configurationsContainer">
            <h1 className = "userName">{props.userName}</h1>
            <span className="material-icons profile">face</span>
            <span className="material-icons configuration">settings</span>
        </section>
    )
}