import React from "react"
import {NavLink} from "react-router-dom"
import "./AsideNavBar.css"

class AsideNavBar extends React.Component {
    
    render (){
        return(
            <div className="asideNavBar aSide">
                <NavLink 
                    activeStyle={{color:"red"}} 
                    to="/requests/dashboard" 
                    className="asideNavBar__navLink dashboard">
                    
                    <span className="material-icons">show_chart</span> 
                    Dashboard

                </NavLink>
                <NavLink 
                    activeStyle={{color:"red"}} 
                    to="/requests/unassigned" 
                    className="asideNavBar__navLink unassigned">

                    <span className="material-icons">assignment</span>
                    Unassigned

                </NavLink>
                <NavLink 
                    activeStyle={{color:"red"}} 
                    to="/requests/assigned" 
                    className="asideNavBar__navLink assigned">
                    
                    <span className="material-icons">assignment_ind</span>
                    Assigned

                </NavLink>   
                <NavLink 
                    activeStyle={{color:"red"}} 
                    to="/requests/memos" 
                    className="asideNavBar__navLink memos">
                        
                    <span className="material-icons">inbox</span>
                    Memos

                </NavLink>
                    
            </div>
        )
    };
}

export default AsideNavBar