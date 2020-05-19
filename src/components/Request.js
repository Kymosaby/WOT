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
        
        for (let prop in props.item){
            this[prop] = props.item[prop];
        }

    } 
    

    getID =  () =>  {
        return this.id
    }

    setFocus = (e) => {
        
        console.log("Antes de setear Focus: ", this.props.queueItems.filter((item) => item.id === this.getID())[0])
        console.log("Variable local de viewed: ", this.viewed)
        this.props.unassignedActions.setFocusOnRequest(this.getID());
        !this.viewed && this.props.queueActions.setItemViewed(this.getID());
        console.log("Antes de setear Focus: ", this.props.queueItems.filter((item) => item.id === this.getID())[0])
        console.log("Variable local de viewed: ", this.viewed)
    }

    toggleView = () => {
        this.setState((prev, props) => {
            
            return ({

            })
        })
    }


    togglePinStatus = (e) => {
          this.pinned
            ? this.props.queueActions.pinItem(e.target.id)
            : this.props.ueueActions.unpinItem(e.target.id)
    }

    render(){  
        let start = moment(this.startDate,"YYYY-DD-MM").format("Do MMM - YYYY")
        return ( 
            <li key={this.id} className="request" onDoubleClickCapture = {this.setFocus}>
                <i 
                    class={`${this.pinned ? "pin--on" : "pin--off"} pin fas fa-thumbtack`}
                    onClick = {this.togglePinStatus}
                ></i>
                <span className = "id">#{this.id}</span>
                <span className ="item__source">
                    <p className="source__topic">{this.subject}</p>
                    <div className="source__details">
                        <p className="details__contact">{this.from}</p>
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
                                {this.viewed && <i className = "material-icons">visibility</i>}
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

function mapStateToProps(store, props) {
    
    return {
        queueItems : store.queueReducer.queueItems,
        pinnedItems : store.queueReducer.pinnedItems,
        focused : store.unassignedReducer.focusedRequest === props.item.id ? true : false ,
        viewed : store.queueReducer.queueItems.find(item => item.id === props.item.id) 
            ? store.queueReducer.queueItems.find(item => item.id === props.item.id).viewed 
            : false 
        // pinned = props.pinnedItems.indexOf(this.id) === -1 ? false : true;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        queueActions : bindActionCreators( QueueActions, dispatch ),
        unassignedActions : bindActionCreators ( UnassignedActions, dispatch )
    }
}
export default connect ( mapStateToProps, mapDispatchToProps ) (Request);