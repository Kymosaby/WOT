import React from 'react';
import NavBar from '../NavBar';
import Configuration from '../Configuration.js'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as UserActions from "../../redux/actions/actionCreators/userActions"
import "./Header.css"

class Header extends React.Component {
    
    componentDidMount() {this.props.actions.getUser();}
    
    render() {
        return (
            <div className="Header">
                <NavBar />
                <Configuration userName = {this.props.nickName}/>
            </div>
        )
    }
}

function mapStateToProps (store) {
    return {
        nickName : store.userReducer.nickName
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions : bindActionCreators(UserActions, dispatch)
    }
}

export default connect( mapStateToProps, mapDispatchToProps ) ( Header )