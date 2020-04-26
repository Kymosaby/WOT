import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav className = "navBar">
            <NavLink 
                activeStyle={{borderBottom: "solid white 2px"}} 
                className="navBar__Dashboard material-icons" 
                exact to="/">
                assessment
            </NavLink>
            <NavLink 
                activeStyle={{borderBottom: "solid white 2px"}} 
                className="navBar__Requests" 
                to="/requests">
                Requests
            </NavLink>
            <NavLink 
                activeStyle={{borderBottom: "solid white 2px"}} 
                className="navBar__Tasks" 
                to="/tasks">
                Tasks
            </NavLink>
        </nav>
    )
}

