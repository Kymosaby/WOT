import React from "react"
import QueueTools from "../../QueueTools"
import UnassignedQueue from "../smart/UnassignedQueue"
import "./Queue.css"

export default function Queue() {

    return (
        <div className = "queue">
            <QueueTools />
            <UnassignedQueue />
        </div>
    )
    
}