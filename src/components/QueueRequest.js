import React from 'react';
import "./QueueRequest.css"

const QueueRequest = (props) => {
    
    const id = props.item["ID"]
    const from = props.item["from"]
    const subject = props.item["subject"]
    const receiver = props.item["receiver"]
    const startDate = props.item["startDate"]
    const hits = props.item["hits"]
    const scope = props.item["scope"]
    const state = props.item["state"]
    const workGroup = props.item["workGroup"]

    return ( <li key = {id} className="requestItem">
        <input id="pin" type="checkbox"/>
        <label for="pin" className= "pin--off material-icons"> label_important</label>
        <div className="id">{id}</div>
        <div className="senderInfo">
            <p className="senderInfo__subject">{subject}</p>
            <p className="senderInfo__from">{from}</p>
            <span  className="senderInfo__sender">
                <i>TeamIcon</i>
                <p>{workGroup}</p>
            </span>
        </div>
        <div className = "otherInfo">
            <p>{startDate}</p>
            <p>{receiver}</p>
            <span>
                <i>email Icon</i>
                <i>{hits}</i>
            </span>
        </div>
        
    </li> );
}
 
export default QueueRequest;