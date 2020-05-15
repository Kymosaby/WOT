import * as QueueType from "../../actionTypes/requests/queueTypes"
import api from "../../../../FakeAPI"



//desacoplar el local storage de unassigned con un parametro queue type
export const queueInit = ( items ) => {
    
    let myGroups = api.Requests.groups //[{"cat",[groupitems]}]
    
    let myPinnedItems = localStorage.getItem("unassignedPinnedItems")
        ? JSON.parse(localStorage.getItem("unassignedPinnedItems")).map(itemID => {
            return ({
                itemID : itemID,
                isGone: items.indexOf(itemID) !== -1 ? false : true
            })
        }): []
    
    let myItems = items.filter(itemID => myPinnedItems.indexOf(itemID) === -1)

    return ({
        type: QueueType.INIT_QUEUE,
        payload : {myItems, myPinnedItems, myGroups}
    })

}

export const setActiveGroupCategory = (group) => {
    
    return({
        type: QueueType.SET_ACTIVE_GROUP_CATEGORY,
        payload : group
    })
}


export const pinItem = (itemID) => {
    
    //desacoplar el local storage de unassigned con un parametro queue type
    let myPinnedItems = localStorage.getItem("unassignedPinnedItems")
        ? JSON.parse(localStorage.getItem("unassignedPinnedItems"))
        : []
    myPinnedItems.push(itemID)
    localStorage.setItem("unassignedPinnedItems",JSON.stringify(myPinnedItems))
    
    return ({
        type: QueueType.SET_PINNED_ITEM,
        payload : itemID
    })
}
    
export const unpinItem = (itemID) => {

    //desacoplar el local storage de unassigned con un parametro queue type
    let myPinnedItems = localStorage.getItem("unassignedPinnedItems")
        ? JSON.parse(localStorage.getItem("unassignedPinnedItems"))
        : []

    localStorage.setItem("unassignedPinnedItems", JSON.stringify(myPinnedItems.filter( ( item ) => item !== itemID )))
    
    return ({
        type: QueueType.REMOVE_PINNED_ITEM,
        payload : itemID
    })
}


export const search = (searchCategory, value) => {
    return ({
        type: QueueType.SEARCH,
        payload : { searchCategory, value }
    })
}

export const removeSearchItem = (searchCategory, value) => {
    return ({
        type: QueueType.REMOVE_SEARCH_ITEM,
        payload : { searchCategory, value }
    })
}

export const removeSearchTag = (searchCategory) => {
    return ({
        type: QueueType.REMOVE_SEARCH_TAG,
        payload : searchCategory
    })
}

export const removeItem = (itemID) => {
    return ({
        type: QueueType.REMOVE_ITEM,
        payload: itemID
    })
}