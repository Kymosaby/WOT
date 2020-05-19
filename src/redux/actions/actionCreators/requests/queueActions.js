import * as QueueType from "../../actionTypes/requests/queueTypes"
import api from "../../../../FakeAPI"



//desacoplar el local storage de unassigned con un parametro queue type
export const queueInit = ( items, queueType ) => {
    
    let myGroups = api.Requests.groups //[{"cat",[groupitems]}]
    
    let myPinnedItems = localStorage.getItem(`${queueType}PinnedItems`)
        ? JSON.parse(localStorage.getItem(`${queueType}PinnedItems`)).map(itemID => {
            return ({
                itemID : itemID,
                isGone: items.indexOf(itemID) !== -1 ? false : true
            })
        }): []
    
    return ({
        type: QueueType.INIT_QUEUE,
        payload : { items, myPinnedItems, myGroups }
    })

}

export const setActiveGroupCategory = (group) => {
    
    return({
        type: QueueType.SET_ACTIVE_GROUP_CATEGORY,
        payload : group
    })
}


export const pinItem = (itemID, queueType) => {
    
    //desacoplar el local storage de unassigned con un parametro queue type
    let myPinnedItems = localStorage.getItem(`${queueType}PinnedItems`)
        ? JSON.parse(localStorage.getItem(`${queueType}PinnedItems`))
        : []
    myPinnedItems.push(itemID)
    localStorage.setItem(`${queueType}PinnedItems`,JSON.stringify(myPinnedItems))
    
    return ({
        type: QueueType.SET_PINNED_ITEM,
        payload : itemID
    })
}
    
export const unpinItem = (itemID, queueType) => {

    //desacoplar el local storage de unassigned con un parametro queue type
    let myPinnedItems = localStorage.getItem(`${queueType}PinnedItems`)
        ? JSON.parse(localStorage.getItem(`${queueType}PinnedItems`))
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

export const setItemViewed = (itemID) => {

    console.log("action triggered to set viewed item", itemID)
    return ({
        type : QueueType.SET_ITEM_VIEWED,
        payload : itemID
    })
}

export const setItemUniewed = (itemID) => {
    return ({
        type : QueueType.SET_ITEM_UNVIEWED,
        payload : itemID
    })
}

export const removeItem = (itemID) => {
    return ({
        type: QueueType.REMOVE_ITEM,
        payload: itemID
    })
}