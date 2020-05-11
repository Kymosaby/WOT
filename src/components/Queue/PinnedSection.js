import React from "react"
import Request from "../Request"

export default function PinnedSection(props) {

    return (
        props.items.map( (item, index) => {
            return (<Request togglePinStatus = {props.togglePinStatus} id = { index } item = { item } pinned />)
        })
    )
}