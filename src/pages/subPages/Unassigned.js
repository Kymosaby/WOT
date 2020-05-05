
import React from "react"
import Queue from "../../components/Queue/containers/dummy/Queue"
import Focus from "../../components/containers/Focus.js"
import "./Unassigned.css"

export default function Unassigned() {
    
    return (
        <div className = "unassigned">
            <Queue />
            <Focus />
        </div>
    )

}

