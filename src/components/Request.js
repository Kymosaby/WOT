import React from 'react';
import "./Request.css"
import {connect} from "react-redux"
import { bindActionCreators} from "redux"
import * as QueueActions from "../redux/actions/actionCreators/requests/queueActions"
import * as UnassignedActions from "../redux/actions/actionCreators/requests/unassignedActions"
import moment from "moment"

class Request extends React.Component{

    constructor (props){
        super(props)
        for (let prop in this.props.item){
            this[prop] = this.props.item[prop] 
        }
        
    } 
    // metaData = {
    //     id : this.props.item.id,
    //     startDate : this.props.item.startDate,
    //     topic : this.props.item.subject,
    //     requestor : this.props.item.from,
    //     workGroup : this.props.item.workGroup,
    //     scope: {
    //         assignation : this.props.item.scope.assignation,
    //         type : this.props.item.scope.type,
    //     },
    //     hits : this.props.item.hits
    // }

    setFocus = (e) => {
        this.props.unassignedActions.setFocusOnRequest(e.target.metaData.id);

    }


    handlePinAction = () => {
          
       
    }

    // const itemSchema = {}
    
    // for (let prop in props.item ) {
    //     itemSchema[prop] = props.item[prop]
    // }

    render(){  

        
        let start = moment(this.startDate,"YYYY-DD-MM").format("Do MMM - YYYY")
        return ( 
            <li className="request" onDoubleClick = {this.setFocus}>
                <i 
                    class={`${this.props.pinned ? "pin--on" : "pin--off"} pin fas fa-thumbtack`}
                    // onClick = {this.props.togglePinStatus(this.id)}
                ></i>
                <span className = "id">#{this.id}</span>
                <span className ="item__source">
                    <p className="source__topic">{this.topic}</p>
                    <div className="source__details">
                        <p className="details__contact">{this.requestor}</p>
                        {this.workGroup && <span  className="details__workGroup">
                            <i className = "workgroup__icon material-icons">work</i>
                            <p className = "workgroup__description">{this.workGroup}</p>
                        </span>}
                    </div>
                </span>
                <div className = "item__divisor"></div>
                <div className = "item__other">
                    <div className = "other__info">
                        <p className = "info__start">{start}</p>
                        <div className = "info__receiver">
                            <p >{this.scope.assignation}</p> 
                            <span className = "material-icons">
                                {(this.scope.type === "team")? "people" : "account_box"}
                            </span>
                        </div>
                    </div>
                    <span className = "other__hits">
                        {!!this.hits && (
                            <React.Fragment>
                            {this.state.viewed && <i className = "material-icons">visibility</i>}
                            <div className = "hits">
                                <i className = "material-icons">mail_outline</i>
                                <i>{this.hits}</i>
                            </div>
                            </React.Fragment>
                        )}
                    </span>
                </div>            
            </li> 
        )           
    }    
} 

function mapStateToProps(store) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        queueActions : bindActionCreators( QueueActions, dispatch ),
        unassignedActions : bindActionCreators (UnassignedActions, dispatch)
    }
}
export default connect ( mapStateToProps, mapDispatchToProps ) (Request);