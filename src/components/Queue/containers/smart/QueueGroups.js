import React from 'react'
import QueueGroup from "../dummy/QueueGroup"

//integrar un chequeo del tipo de queue que le esta solicitando renderizarse, 
//para que pueda (segun el tipo), buscar la informacion de la cantidad de 
//grupos y los items de ese grupo

export default  QueueGroups = (props) => {    
    return(
        //["today","yesterday","olders"] esos son los grupos
        props.queueGroups.get(props.groupCategory).map( ( group, idx ) => {
            return( 
                <QueueGroup 
                    key = {idx}
                    items = { props.queueItems.filter(( req ) => (
                        req.item.groups[props.groupCategory] === group
                    ))} 
                    groupName = { group }
                />
            )
        })
    )
}

