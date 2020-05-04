import React from "react"
import "../../../../System"
import {pascalFormat} from "../../../../utils/TextNotation"
import QueueItem from "../../QueueItem"


export default function QueueGroup( props ) {
    return (    
        props.items.length ? 
            <div className ="group">
                <div className = "group__tittle">
                    <h2>{ pascalFormat( props.groupName ) }</h2>
                    <i>{ props.items.length }</i>
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