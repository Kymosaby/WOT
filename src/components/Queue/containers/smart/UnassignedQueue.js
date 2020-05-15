import React from "react"
import {connect} from "react-redux"
import { bindActionCreators} from "redux"
import * as ReqActions from "../../../../redux/actions/actionCreators/requestsActions"
import * as QueueActions from "../../../../redux/actions/actionCreators/requests/queueActions"
// import { pascalFormat } from "../../../../utils/TextNotation"
import QueueGroup from "./QueueGroup"
import PinnedSection from "../../PinnedSection"
import System from "../../../../System"
import "./UnassignedQueue.css"

class UnassignedQueue extends React.Component {

    state = {
        pinnedItems : localStorage.getItem("pinnedUnassignedRequests")  //devuelve null si no tiene nada
            ? JSON.parse(localStorage.getItem("pinnedUnassignedRequests"))
            : [],
    }

    togglePinStatus =  ( itemID ) => {
        // console.log("Pin click")

        let currentPinnedList = localStorage.getItem("pinnedUnassignedRequests")
            ? JSON.parse(localStorage.getItem("pinnedUnassignedRequests"))
            : []

        let updatedList = this.state.pinnedItems.indexOf(itemID) === -1 //no lo encontro en pinned items, por lo que se deberia pinear 
            ? this.pinItem(itemID, currentPinnedList)
            : this.unpinItem(itemID, currentPinnedList) 
        
        // this.setState((prevState) => {
        //     return { pinnedItems : updatedList }
        // })
    }

    pinItem =  (itemID, list) => {
        list.push(itemID);
        localStorage.setItem("pinnedUnassignedRequests",JSON.stringify(list))
        return list
    }

    unpinItem =  (itemID, list) => {
        let idx = list.indexOf(itemID)
        list.splice(idx, 1);
        localStorage.setItem("pinnedUnassignedRequests",JSON.stringify(list))
        return list
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