import React from 'react';
import "./QueueItem.css"
import moment from "moment"

const QueueItem = (props) => {
    
    const itemSchema = {}

    for (let prop in props.item ) {
        itemSchema[prop] = props.item[prop]
    }

    let start = moment(itemSchema.startDate,"YYYY-DD-MM").format("Do MMM - YYYY")
    return ( 
        // console.log(itemSchema.id)
        <li className="item">
            <input id="pin"  type="checkbox"/>
            <label for="pin" className= "pin--off material-icons"> label_important</label>
            <span className = "id">#{itemSchema.id}</span>
            <span className ="item__source">
                <p className="source__topic">{itemSchema.subject}</p>
                <div className="source__details">
                    <p className="details__contact">{itemSchema.from}</p>
                    {itemSchema.workGroup && <span  className="details__workGroup">
                        <i className = "workgroup__icon material-icons">work</i>
                        <p className = "workgroup__description">{itemSchema.workGroup}</p>
                    </span>}
                </div>
            </span>
            <div className = "item__divisor"></div>
            <div className = "item__other">
                <p>{start}</p>
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