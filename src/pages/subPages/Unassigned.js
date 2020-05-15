
import React from "react"
import Queue from "../../components/Queue/containers/dummy/Queue"
import Focus from "../../components/containers/Focus.js"
import "./Unassigned.css"

export default class Unassigned extends React.Component {
    
    render() {
        return (
            <div className = "unassigned">
                <Queue type="unassigned" />
                <Focus />
            </div>
        )
    }
}


