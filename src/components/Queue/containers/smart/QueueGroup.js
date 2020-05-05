import React from "react"
import "../../../../System"
import {pascalFormat} from "../../../../utils/TextNotation"
import QueueItem from "../../QueueItem"

import "./QueueGroup.css"


export default function QueueGroup( props ) {
    return (    
        props.items.length ? 
            <div className ="group">
                <div className = "group__tittle">
                    <h2 className = "tittle__groupName">{ pascalFormat( props.groupName ) }</h2>
                    <i className = "tittle__groupItemsCount">{ props.items.length }</i>
                    <span className = "material-icons">keyboard_arrow_down</span>
                </div>

                <ul className = "group__items">
                    {props.items.map( ( item , index ) => {
                        return (<QueueItem id = { index } item = { item }/>)
                    })}
                </ul>
            </div>
        : false
    )    
}