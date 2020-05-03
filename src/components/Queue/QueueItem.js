import React from 'react';
import "./QueueRequest.css"

const QueueItem = (props) => {
    
    const itemSchema = {}

    for (let prop in props.item ) {
        itemSchema[prop] = props.item[prop]
    }

    return ( 
        <li className="requestItem">
            <input id="pin" type="checkbox"/>
            <label for="pin" className= "pin--off material-icons"> label_important</label>
            <div className="id">{itemSchema.id}</div>
            <div className="senderInfo">
                <p className="senderInfo__subject">{itemSchema.subject}</p>
                <p className="senderInfo__from">{itemSchema.from}</p>
                <span  className="senderInfo__sender">
                    <i>TeamIcon</i>
                    <p>{itemSchema.workGroup}</p>
                </span>
            </div>
            <div className = "otherInfo">
                <p>{itemSchema.startDate}</p>
                <p>{itemSchema.receiver}</p>
                <span>
                    <i>email Icon</i>
                    <i>{itemSchema.hits}</i>
                </span>
            </div>
            
        </li> 
    );
}
 
export default QueueItem;