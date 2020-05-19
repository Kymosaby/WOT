import React from "react"
import {connect} from "react-redux"
import { bindActionCreators} from "redux"
import * as QueueActions from "../../../../redux/actions/actionCreators/requests/queueActions"
// import { pascalFormat } from "../../../../utils/TextNotation"
import QueueGroups from "./QueueGroups"
import PinnedSection from "../../PinnedSection"

import "./UnassignedQueue.css"
import System from "../../../../System"

class UnassignedQueue extends React.Component {

    constructor(props){
        super(props)
        //en este init, pasarle el id de la queue para tenerlo en un mapa de nuestros estados a todas las queue
        props.queueActions.queueInit( this.props.unassignedItems, "unassigned" )
    }

    render() {
        return (
            <div className = "queueContent">
                <PinnedSection type = "unassigned" />
                <QueueGroups 
                    groupCategory = {this.props.activeGroupCategory}
                    queueGroups = {this.props.queueGroups}
                    queueItems = {this.props.unassignedItems}            
                />  
            </div> 
        ) 
    }
}

function mapStateToProps (store) {
    
    let requestNameSpace = System.schema.request
    
    return {
        //deberiamos dinamicamente determinar de donde sacar los items a proyectar segun la categoria de grupos provista por el componente padre
        unassignedItems : store.requestsReducer.requests.filter(req => (
            req.type === requestNameSpace.type.request && 
            req.state !== requestNameSpace.state.standBy && 
            req.stage === requestNameSpace.stage.unassigned
        )),
        // searchTags : store.queueReducer.searchTags, //map
        activeGroupCategory : store.queueReducer.activeGroupCategory,
        queueGroups : store.queueReducer.groups, //{groupCategory, [groupItems]}
        queueItems : store.queueReducer.queueItems,
    }
} 

function mapDispatchToProps(dispatch) {
    return {
        queueActions : bindActionCreators ( QueueActions, dispatch ),
    }
}

export default connect ( mapStateToProps, mapDispatchToProps ) (UnassignedQueue)