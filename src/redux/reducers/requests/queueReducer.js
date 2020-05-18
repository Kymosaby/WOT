import * as QueueType from '../../actions/actionTypes/requests/queueTypes'

const INITIAL_STATE = {
    groups : new Map(), //{category : [groupitems]}
    activeGroupCategory : "date",
    searchTags : new Map(),
    pinnedItems : [], // {{item}, isGone}
    unpinnedItems : [], //{item}
    queueItems : [] // {{item}, viewed, focused}
};

const queueReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
    
        case QueueType.INIT_QUEUE:

            let myGroups = new Map(state.groups)
            action.payload.myGroups.forEach( group => myGroups.set( group.category, group.groupItems ))

            return {
                ...state,
                queueItems : action.payload.myItems.map((item) => {
                    return {
                        item,
                        viewed : false,
                        focused : false
                    }
                }),
                unpinnedItems : action.payload.myItems,
                pinnedItems : action.payload.myPinnedItems,
                groups : myGroups
            }

        case QueueType.SET_ACTIVE_GROUP_CATEGORY:
            
            return {
                ...state,
                activeGroupCategory : action.payload
            }


        case QueueType.SET_PINNED_ITEM:
            
            return {
                ...state,
                pinnedItems : state.pinnedItems.push({ itemID : action.payload.itemID , isGone: false }),
                queueItems : state.queueItems.filter(item => item !== action.payload.itemID)
            }

        case QueueType.REMOVE_PINNED_ITEM:

            return {
                ...state,
                pinnedItems : state.queueItems.push(action.payload.itemID),
                queueItems : state.pinnedItems.filter(item => item.itemID !== action.payload.itemID)
            }
        
        // case QueueType.REMOVE_ITEM:
            
        //     let myQueueItems = state.queueItems
        //     return {
        //         ...state,

        //     }


        case QueueType.SEARCH:
            
        let mySearchTags = new Map( state.searchTags )
            return {
                ...state,
                searchTags : mySearchTags.get(action.payload.searchCategory)
                    ? mySearchTags.set(
                        action.payload.searchCategory, 
                        [ ...mySearchTags.get(action.payload.searchCategory), action.payload.value])
                    : mySearchTags.set(action.payload.searchCategory, [action.payload.value])
            }

        case QueueType.REMOVE_SEARCH_ITEM:
        
            return {
                ...state,
                // tenemos que saber si eliminar la entry de una (siendo este item el ultimo) o filtrarlo para sacar un item
                searchTags : new Map( state.searchTags )
                    .get(action.payload.searchCategory)
                    .filter(values => values !== action.payload.value).length
                        ? mySearchTags.set(
                            action.payload.searchCategory, 
                            mySearchTags.get(action.payload.searchCategory)
                                .filter(value => value !== action.payload.value))
                        : mySearchTags.delete(action.payload.searchCategory)
            }

        case QueueType.REMOVE_SEARCH_TAG:
               
            return {
                ...state,
                searchTags : new Map( state.searchTags ).delete(action.payload.searchCategory)
            }

        default: return state;
    }
}


export default queueReducer