import React from 'react';
import "./Request.css"
import moment from "moment"

const Request = (props) => {
    

    const itemSchema = {}

    for (let prop in props.item ) {
        itemSchema[prop] = props.item[prop]
    }
    
    let start = moment(itemSchema.startDate,"YYYY-DD-MM").format("Do MMM - YYYY")
    return ( 
        // console.log(itemSchema.id)
        <li className="item">
            <i class="pin--off fas fa-thumbtack"></i>
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
                <div className = "other__info">
                    <p className = "info__start">{start}</p>
                    <p className = "info__receiver">{itemSchema.scope}</p>
                </div>
                <span className = "other__hits">
                    {!!itemSchema.hits && (
                        <React.Fragment>
                            <i className = "material-icons">mail_outline</i>
                            <i>{itemSchema.hits}</i>
                        </React.Fragment>
                    )}
                </span>
            </div>
            
        </li> 
    );
}
 
export default Request;