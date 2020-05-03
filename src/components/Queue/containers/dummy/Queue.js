import React from "react"
import QueueTools from "../../QueueTools"
import QueueTags from "../smart/QueueTags"
import QueueContent from "../smart/QueueContent"
import StandBy from "../smart/StandBy"
import PinnedSection from "../smart/PinnedSection"
import "./Queue.css"

export default function Queue() {

    return (
        <div className = "queue">
            <QueueTags />
            <QueueTools />
            <PinnedSection/>
            <QueueContent />
            <StandBy />
        </div>
    )
    
}