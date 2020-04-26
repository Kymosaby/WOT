import React from "react"
import QueueTools from "../../components/QueueTools"
import QueueFilterSection from "../../components/QueueFilterSection"
import QueueContent from "../containers/QueueContent"
import StandBy from "../../components/containers/StandByQueue"
import "./Queue.css"

export default function Queue () {

    return (
        <div className = "queue">
            <QueueFilterSection />
            <QueueTools />
            <QueueContent />
            <StandBy/>
        </div>

    )
    
}