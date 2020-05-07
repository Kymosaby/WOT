import React from "react"
import "./QueueTools.css"

export default class QueueTools extends React.Component {
    
    constructor (props) {
        super(props);
        this.handleSearchInput = this.handleSearchInput.bind(this)
    }

    state = {
        searchTags : new Map(),
        activeSearchCategory : {default : "select a category"},
        searchCategoriesSchema : {
            "requestor" : {
                "placeholder" : "Requested by :",
                "pillColor" : "red",
                "description" : "Requestor",
                "icon" : "alternate_email"
            },
            "request" : {
                "placeholder" : "Request ID :",
                "pillColor" : "purple",
                "description" : "Assignment",
                "icon" : "fingerprint"
                
            },
            "topic" : {
                "placeholder" : "Topic :",
                "pillColor" : "orange",
                "description" : "Topic",
                "icon" : "calendar_view_day"
            },
        },
        searchCategories : ["requestor","request","topic"]

        
    }

    handleSearchInput (e) {

    }

    render () {
        return(
            <section className="QueueTools">
                {!!this.state.searchTags.size && <div className= "searchTags">search Tags</div>}
                <div className = "tools">
                    <input id="search" type="checkbox"></input>
                    <input id="options" type="checkbox"></input>
                    <ul className="options">
                        {this.state.searchCategories.map( category => 
                            { return( 
                                <li className = "option">
                                    <span className= "material-icons">{this.state.searchCategoriesSchema[category].icon}</span> 
                                    <p>{this.state.searchCategoriesSchema[category]["description"]}</p>
                                </li> 
                            )}
                        )}
                    </ul>
                    <label for="options"className= "material-icons dropDown">keyboard_arrow_down</label>   
                    <input type="text" placeholder= "hola" className = "tools__searchBox" ></input>
                    <label className="material-icons tools__searchButton" for="search">search</label>
                    <span className="fas fa-filter"></span>
                </div>
            </section>
        )
    }
}