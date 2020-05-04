import React from 'react';
import "./QueueItem.css"

const QueueItem = (props) => {
    
    const itemSchema = {}

    for (let prop in props.item ) {
        itemSchema[prop] = props.item[prop]
    }

    return ( 
        <li className="item">
            <input id="pin" type="checkbox"/>
            <label for="pin" className= "pin--off material-icons"> label_important</label>
            <div className = "id">{itemSchema.id}</div>
            <div className="source">
                <p className="source__topic">{itemSchema.subject}</p>
                <span className ="source__details">
                    <p className="details__contact">{itemSchema.from}</p>
                    <span  className="details__workGroup">
                        <i className = "workgroup__icon material-icons">work</i>
                        <p className = "workgroup__description">{itemSchema.workGroup}</p>
                    </span>
                </span>
            </div>
            <div className = "other">
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