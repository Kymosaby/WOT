import React from "react"
import "./QueueTools.css"

export default class QueueTools extends React.Component {
    
    constructor (props) {
        super(props);
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.handleOptionSelect = this.handleOptionSelect.bind(this)
        this.handleSearchAction = this.handleSearchAction.bind(this)
    }
    state = {
        searchValue : "",
        searchTags : [{"":""}],
        activeSearchCategory : "default",
        searchCategories : ["requestor","request","topic"],
        
    }

    searchCategoriesSchema = {
        "default" : {"placeholder": "please select a category"},
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
        }
    }

    handleSearchInput (e) {
        this.setState({searchValue : e.target.value})
    }

    handleOptionSelect (e) {
        
    }

    handleSearchAction (e) {
        this.setState((prevState, props) => {
            let myTags = new Map(prevState.searchTags)
            myTags.set("categoria","hola")
            return {searchTags : myTags}
        })
    }

    render () {
        return(
            <section className="QueueTools">
                {!!this.state.searchTags.length && 
                    <div className= "searchTags">
                        {this.state.searchTags.map((tag)=>{
                            return <span className="tag" style={{color: this.state}} ></span>
                        })}
                    </div>
                }
                <div className = "tools">
                    <input id="search" type="checkbox"></input>
                    <label className="material-icons tools__searchButton" htmlFor="search">
                        <label htmlFor = "options"className= "material-icons dropDown">
                            <input id="options" type="checkbox"></input>
                            <ul className="options">
                                {this.state.searchCategories.map( category => 
                                    {return( 
                                        <li className = "option" onClick={this.handleOptionSelect}>
                                            <span className= "material-icons">{this.searchCategoriesSchema[category].icon}</span> 
                                            <p>{this.searchCategoriesSchema[category]["description"]}</p>
                                        </li> 
                                    )}
                                )}
                            </ul>    
                            keyboard_arrow_down
                        </label>   
                        <input 
                            type="search" 
                            className = "tools__searchBox" 
                            onChange={this.handleSearchInput} 
                            onSearch={this.handleSearchAction}
                            placeholder = {this.searchCategoriesSchema[this.state.activeSearchCategory].placeholder} 
                            value={this.state.searchValue}>
                        </input>    
                        search
                    </label>
                    <span className="fas fa-filter"></span>
                </div>
            </section>
        )
    }
}