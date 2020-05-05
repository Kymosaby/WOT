import React from 'react'
import {Route} from "react-router-dom"

import AsideNavBar from "../components/containers/AsideNavBar"
import Unassigned from "../pages/subPages/Unassigned"

class Requests extends React.Component {

    render() {
        return(
            <div className ="page">
                <AsideNavBar />
                {/*conjunto de rutas se listan aca*/}
                <Route path={`${this.props.match.path}/unassigned`} component={Unassigned} />
            </div>
        ) 
    }
}

export default Requests;