import React from "react"
import {NavLink} from "react-router-dom"
import "./AsideNavBar.css"

class AsideNavBar extends React.Component {
    
    render (){
        return(
            <div className="asideNavBar page__aside"> 
                <NavLink 
                    activeStyle={{color:"#EE5F06"}} 
                    to="/requests/dashboard" 
                    className="asideNavBar__navLink dashboard"
                >
                    
                    <span className="material-icons">show_chart</span> 
                    <p>Dashboard</p>

                </NavLink>
                <NavLink 
                    activeStyle={{color:"#EE5F06"}}
                    to="/requests/unassigned" 
                    className="asideNavBar__navLink unassigned"
                >
                    <span className="material-icons">assignment</span>
                    <p>Unassigned</p>

                </NavLink>
                <NavLink 
                    activeStyle={{color:"#EE5F06"}}
                    to="/requests/assigned" 
                    className="asideNavBar__navLink assigned"
                >   
                    <span className="material-icons">assignment_ind</span>
                    <p>Assigned</p>

                </NavLink>   
                <NavLink 
                    activeStyle={{color:"#EE5F06"}}
                    to="/requests/memos" 
                    className="asideNavBar__navLink memos"
                >
                    <span className="material-icons">inbox</span>
                    <p>Memos</p>

                </NavLink>
                    
            </div>
        )
    };
}

export default AsideNavBar