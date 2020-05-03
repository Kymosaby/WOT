import React from "react"
import "../System"
import {pascalFormat} from "../utils/TextNotation"
import QueueRequest from "./QueueRequest"
import moment from "moment"

export default function QueueGroups( props ) {

    return (
        props.groups? props.groups.map( group => {
            return (
                <React.Fragment>
                <div className = "groupTittle">
                    <h2>{pascalFormat(group)}</h2>
                    <i>{ getGroupItems( props.items, props.activeGroup, group ).length }</i>
                    <span className = "material-icons">keyboard_arrow_down</span>
                </div>
                <ul className = "groupContainer">
                    { getGroupItems( props.items, props.activeGroup, group )
                        .map( ( item , index) => {
                            return (
                                <QueueRequest id = {index} item = {item}/>
                            )
                        })
                    }                    
                </ul>
                </React.Fragment>
            )
        }) : false
    )    
}

const getGroupItems = ( itemList, groupCategory, groupName ) => {

    return itemList.filter( item => item.groups[groupCategory] === groupName)

}