import React from "react"
import {connect} from "react-redux"
import { bindActionCreators} from "redux"
import * as ReqActions from "../../../../redux/actions/actionCreators/requests/requestsActions"
import * as QueueActions from "../../../../redux/actions/actionCreators/requests/queueActions"
// import { pascalFormat } from "../../../../utils/TextNotation"
import QueueGroup from "./QueueGroup"
import PinnedSection from "../../PinnedSection"
import System from "../../../../System"
import "./UnassignedQueue.css"

class UnassignedQueue extends React.Component {

    togglePinStatus =  ( itemID ) => {
        
    }

    pinItem =  (itemID, list) => {
        
    }

    unpinItem =  (itemID, list) => {
        
    }

    componentDidMount() {
        this.props.requestActions.getUnassignedRequests();
        // this.props.requestActions.getStandByRequests();
        this.props.queueActions.getQueueGroups();
        this.props.queueActions.getQueueFilters();
    }

    render() {       
    
        return (
            this.props.queueGroups.get(this.props.activeGroupCategory)?
                <div className = "queueContent">
                    {this.state.pinnedItems && 
                        <PinnedSection 
                            items = {this.props.items.filter( item => this.state.pinnedItems.indexOf( (parseInt(item.id) )) !== -1 )}
                            togglePinStatus = {this.togglePinStatus}                       
                        />
                    }
                    {this.props.queueGroups.get(this.props.activeGroupCategory).map( group => {
                        return (
                            <QueueGroup
                                items = {this.props.items.filter( item => 
                                    item.groups[this.props.activeGroupCategory] === group && this.state.pinnedItems.indexOf( (parseInt(item.id) )) === -1 
                                )} 
                                groupName = {group}
                                togglePinStatus = {this.togglePinStatus}  
                            />
                        )
                    })} 
                </div> 
            : false
        ) 
    }
}

function mapStateToProps (store) {

    let requestNameSpace = System.schema.request
    
    return {
        unassignedItems : store.requestsReducer.requests.filter(req => req.type === requestNameSpace.type.unassigned && req.state !== requestNameSpace.state.standBy),
        
        searchTags : store.queueReducer.searchTags,
        queueGroups : store.queueReducer.groups,
        activeGroupCategory : store.queueReducer.activeGroupCategory
    }
} 

function mapDispatchToProps(dispatch) {
    return {
        requestActions : bindActionCreators(ReqActions, dispatch),
        queueActions : bindActionCreators (QueueActions, dispatch)
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UnassignedQueue)