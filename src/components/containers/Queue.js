import React from "react"
import QueueTools from "../../components/QueueTools"
import QueueTags from "../QueueTags"
import QueueContent from "../containers/QueueContent"
import StandBy from "../../components/containers/StandByQueue"
import "./Queue.css"

export default function Queue() {

    return (
        <div className = "queue">
            <QueueTags />
            <QueueTools />
            <QueueContent />
            <StandBy />
        </div>
    )
    
}