import React from "react"
import "./QueueContent.css"
import {connect} from "react-redux"
import { bindActionCreators} from "redux"
import * as ReqActions from "../../../../redux/actions/actionCreators/requestsActions"
import * as QueueActions from "../../../../redux/actions/actionCreators/queueActions"
// import { pascalFormat } from "../../../../utils/TextNotation"
import QueueGroup from "./QueueGroup"
// import System from "../../../../System"

class QueueContent extends React.Component {

    componentDidMount() {
        this.props.requestActions.getUnassignedRequests();
        // this.props.requestActions.getStandByRequests();
        // this.props.requestActions.getRequestSchema();
        this.props.queueActions.getQueueGroups();
        this.props.queueActions.getQueueFilters();
    }

    // buildQueueHeader() {
    //     return (
    //         <ul className = "queueHeader">  
    //             {this.props.requestSchema.map( ( tittle, index ) => {
    //                 return <li className = "" key= {index}>{pascalFormat(tittle)}</li>
    //             })}
    //         </ul>
    //     )
    // }
        
    render() {       
        return (
            this.props.queueGroups[this.props.activeGroupCategory]?
                <React.Fragment>
                    {this.props.queueGroups[this.props.activeGroupCategory].map( group => {
                        return (
                            <QueueGroup 
                                items = {this.props.unassignedRequests.filter( item => item.groups[this.props.activeGroupCategory] === group)} 
                                groupName = {group}
                            />
                        )
                    })} 
                    
                </React.Fragment> 
            : false
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