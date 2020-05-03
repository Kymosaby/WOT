import React from "react"
import "./QueueContent.css"
import {connect} from "react-redux"
import { bindActionCreators} from "redux"
import * as ReqActions from "../../redux/actions/actionCreators/requestsActions"
import * as QueueActions from "../../redux/actions/actionCreators/queueActions"
import { pascalFormat } from "../../utils/TextNotation"
import QueueGroups from "../QueueGroups"
import System from "../../System"

class QueueContent extends React.Component {

    state = {
        pinnedRequests : [] 
    }

    componentDidMount() {
        this.props.requestActions.getUnassignedRequests();
        this.props.requestActions.getStandByRequests();
        this.props.requestActions.getRequestSchema();
        this.props.queueActions.getQueueGroups();
        this.props.queueActions.getQueueFilters();
    }

    buildQueueHeader() {
        return (
            <ul className = "queueHeader">  
                {this.props.requestSchema.map( ( tittle, index ) => {
                    return <li className = "" key= {index}>{pascalFormat(tittle)}</li>
                })}
            </ul>
        )
    }
        
    render() {
        
        return (
            <React.Fragment>
                {Boolean(this.state.pinnedRequests.length) && <div>pinnedArea</div>}
                {this.buildQueueHeader()}
                <QueueGroups items = {this.props.unassignedRequests} groups = {this.props.queueGroups[this.props.activeGroupCategory]} activeGroup = {this.props.activeGroupCategory} />
            </React.Fragment>
        )
    }
}

function mapStateToProps (store) {

    return {
        unassignedRequests : store.requestsReducer.unassignedRequests,
        requestSchema : store.requestsReducer.requestSchema,
        queueFilters : store.queueReducer.filters,
        queueGroups : store.queueReducer.groups,
        activeGroupCategory : store.queueReducer.activeGroupCategory,
        activeFilters : store.queueReducer.activeFilters 
    }
} 

function mapDispatchToProps(dispatch) {
    return {
        requestActions : bindActionCreators(ReqActions, dispatch),
        queueActions : bindActionCreators (QueueActions, dispatch)
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (QueueContent)