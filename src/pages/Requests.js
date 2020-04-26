import React from 'react'
import {Route} from "react-router-dom"

import AsideNavBar from "../components/containers/AsideNavBar"
import Unassigned from "../pages/subPages/Unassigned"

import "../components/containers/AsideNavBar"
class Requests extends React.Component {

    render() {
        return(
            <React.Fragment>
                <AsideNavBar />
                {/*conjunto de rutas se listan aca*/}
                <Route path={`${this.props.match.path}/unassigned`} component={Unassigned} />
            </React.Fragment>
        ) 
    }
}

export default Requests;