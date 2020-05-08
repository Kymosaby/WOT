import React from 'react';
import "./Request.css"
import moment from "moment"
class Request extends React.Component{
    
    state = {
        pinned : false,
        viewed : false,
    }
    
    request = {
        id : this.props.item.id,
        startDate : this.props.item.startDate,
        topic : this.props.item.subject,
        requestor : this.props.item.from,
        workGroup : this.props.item.workGroup,
        scope: {
            assignation : this.props.item.scope.assignation,
            type : this.props.item.scope.type,
        },
        hits : this.props.item.hits
    }

    handleItemClick = () => {
        this.setState((prev, props) => {
            return {
                viewed : !prev.viewed
            }
        })
    }

    // const itemSchema = {}
    
    // for (let prop in props.item ) {
    //     itemSchema[prop] = props.item[prop]
    // }

    render(){  

        let myRequest = this.request;
        let start = moment(myRequest.startDate,"YYYY-DD-MM").format("Do MMM - YYYY")
        return ( 
            <li className="item" onDoubleClick = {this.handleItemClick}>
                <i class="pin--off fas fa-thumbtack"></i>
                <span className = "id">#{myRequest.id}</span>
                <span className ="item__source">
                <p className="source__topic">{myRequest.topic}</p>
                <div className="source__details">
                <p className="details__contact">{myRequest.requestor}</p>
                {myRequest.workGroup && <span  className="details__workGroup">
                <i className = "workgroup__icon material-icons">work</i>
                <p className = "workgroup__description">{myRequest.workGroup}</p>
                </span>}
                </div>
                </span>
                <div className = "item__divisor"></div>
                <div className = "item__other">
                    <div className = "other__info">
                        <p className = "info__start">{start}</p>
                        <div className = "info__receiver">
                            <p >{myRequest.scope.assignation}</p> 
                            <span className = "material-icons">
                                {(myRequest.scope.type === "team")? "people" : "account_box"}
                            </span>
                        </div>
                    </div>
                    <span className = "other__hits">
                        {!!myRequest.hits && (
                            <React.Fragment>
                            {this.state.viewed && <i className = "material-icons">visibility</i>}
                            <div className = "hits">
                                <i className = "material-icons">mail_outline</i>
                                <i>{myRequest.hits}</i>
                            </div>
                            </React.Fragment>
                        )}
                    </span>
                </div>            
            </li> 
        )
                
    }
} 
export default Request;