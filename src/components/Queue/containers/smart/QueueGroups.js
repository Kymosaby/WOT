import React from 'react'
import {connect} from "react-redux"
import QueueGroup from "../dummy/QueueGroup"

//integrar un chequeo del tipo de queue que le esta solicitando renderizarse, 
//para que pueda (segun el tipo), buscar la informacion de la cantidad de 
//grupos y los items de ese grupo

const QueueGroups = (props) => {    
    console.log(props)
    return(
        //["today","yesterday","olders"] esos son los grupos
        props.queueGroups.get(props.metaData.groupCategory).map( ( group ) => {
           return( <QueueGroup 
                items = { props.requests.filter(( req ) => (
                    req.groups[props.metaData.groupCategory] === group
                ))} 
                groupName = { group }
            />)
        })
    )
}

//desacoplar a la queue de unassigned
function mapStateToProps (store) {
    return {
        queueGroups : store.queueReducer.groups, //{groupCategory, [groupItems]}
        queueItems : store.queueReducer.queueItems,
        //desacoplar esta busqueda
        requests : store.requestsReducer.requests
    }
} 

export default connect ( mapStateToProps ) (QueueGroups)