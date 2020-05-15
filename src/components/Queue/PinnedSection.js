import React from "react"
import {connect} from "react-redux"
import { bindActionCreators} from "redux"
import * as QueueActions from "../../redux/actions/actionCreators/requests/queueActions"
import Request from "../Request"


function PinnedSection(props) {
    return (
        !!props.pinnedItems.length && props.pinnedItems.map( (item, index) => {        
            return (<Request id = { index } item = { item } pinned />)
        })
    )
}

function mapStateToProps (store) {
    return {
        //deberiamos dinamicamente determinar de donde sacar los items a proyectar segun la categoria de grupos provista por el componente padre
        pinnedItems : store.queueReducer.pinnedItems,
    }
} 


function mapDispatchToProps(dispatch) {
    return {
        queueActions : bindActionCreators( QueueActions, dispatch )
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(PinnedSection)
