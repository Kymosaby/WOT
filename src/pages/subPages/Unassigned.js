
import React from "react"
import Queue from "../../components/containers/Queue.js"
import Focus from "../../components/containers/Focus.js"
import "./Unassigned.css"

export default function Unassigned() {
    
    return (
        <div className = "subPage unassigned">
            <Queue />
            <Focus />
        </div>
    )

}

