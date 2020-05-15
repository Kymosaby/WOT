import React from "react"
import QueueTools from "../../QueueTools"
import UnassignedQueue from "../smart/UnassignedQueue"
import "./Queue.css"

export default function Queue(props) {
    
    let myQueue = () => { 
        switch(props.type) {
            case "unassigned":
                return (<UnassignedQueue />)
            default: return false;
        }
    }

    return (
        <div className = "queue">
            <QueueTools type = "unassigned"/>
            {myQueue()}
        </div>
    )
}