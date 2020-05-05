import React from "react"
import Request from "../Request"

export default function PinnedSection(props) {
    return (
        props.items.map( (item, index) => {
            return (<Request id = { index } item = { item } pinned/>)
        })
    )
}