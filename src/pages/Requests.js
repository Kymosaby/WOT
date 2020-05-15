import React from 'react'
import {Route} from "react-router-dom"
import {connect} from "react-redux"
import { bindActionCreators} from "redux"
import * as ReqActions from "../redux/actions/actionCreators/requests/requestsActions"
import AsideNavBar from "../components/containers/AsideNavBar"
import Unassigned from "./subPages/Unassigned"
import Assigned from "./subPages/Assigned"

class Requests extends React.Component {
    constructor (props){
        super(props)
        this.props.requestActions.getUnassignedRequests()
    }

    render(){
        return(
            <div className ="page">
                <AsideNavBar />
                {/*conjunto de rutas se listan aca*/}
                <Route path={`${this.props.match.path}/unassigned`} component={Unassigned} />
                <Route path={`${this.props.match.path}/assigned`} component ={Assigned} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestActions : bindActionCreators( ReqActions, dispatch )
    }
}

export default connect( null, mapDispatchToProps )( Requests )