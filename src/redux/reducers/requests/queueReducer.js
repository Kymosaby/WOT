import * as QueueType from '../../actions/actionTypes/requests/queueTypes'

const INITIAL_STATE = {
    groups : new Map(),
    activeGroupCategory : "date",
    searchTags : new Map(),
    pinnedItems : [], // {itemID, isGone}
    queueItems : [] // {itemID}
};

const queueReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
    
        case QueueType.INIT_QUEUE:

            let myGroups = new Map(state.groups)
            action.payload.map(group => myGroups.set(group.category, group.groupItems))

            return {
                ...state,
                queueItems : action.payload.myItems,
                pinnedItems : action.payload.myPinnedItems,
                groups : myGroups
            }

        case QueueType.SET_ACTIVE_GROUP_CATEGORY:
            return {
                ...state,
                activeGroupCategory : action.payload
            }


        case QueueType.SET_PINNED_ITEM:

            let myQueueItems = state.queueItems.filter(item => item !== action.payload.itemID)
            
            //chequear si esto no viola los terminos de una funcion pura y que repercuciones puede llegar a tener
            let myPinnedItems = state.pinnedItems.push({ itemID, isGone: false })

            return {
                ...state,
                pinnedItems : myPinnedItems,
                queueItems : myQueueItems
            }

        case QueueType.REMOVE_PINNED_ITEM:

            //chequear si esto no viola los terminos de una funcion pura y que repercuciones puede llegar a tener
            let myQueueItems = state.queueItems.push(itemID)
            let myPinnedItems = state.pinnedItems.filter(item => item.itemID !== action.payload.itemID)
            
            return {
                ...state,
                pinnedItems : myPinnedItems,
                queueItems : myQueueItems
            }
        
        // case QueueType.REMOVE_ITEM:
            
        //     let myQueueItems = state.queueItems
        //     return {
        //         ...state,

        //     }


        case QueueType.SEARCH:
        
            let mySearchTags = new Map( sate.searchTags )

            mySearchTags.get(action.payload.searchCategory)
                ? mySearchTags.set(action.payload.searchCategory, [ ...mySearchTags.get(action.payload.searchCategory), action.payload.value])
                : mySearchTags.set(action.payload.searchCategory, [action.payload.value])

            return {
                ...state,
                searchTags : mySearchTags
            }

        case QueueType.REMOVE_SEARCH_ITEM:
        
            let mySearchTags = new Map( sate.searchTags )

            // tenemos que saber si eliminar la entry de una (siendo este item el ultimo) o filtrarlo para sacar un item
            mySearchTags.get(action.payload.searchCategory)
                .filter(values => values !== action.payload.value).length
                    ? mySearchTags.set(
                        action.payload.searchCategory, 
                        mySearchTags.get(action.payload.searchCategory)
                            .filter(value => value !== action.payload.value))
                    : mySearchTags.delete(action.payload.searchCategory)

            return {
                ...state,
                searchTags : mySearchTags
            }

        case QueueType.REMOVE_SEARCH_TAG:
        
            let mySearchTags = new Map( sate.searchTags )
            mySearchTags.delete(action.payload.searchCategory)

            return {
                ...state,
                searchTags : mySearchTags
            }

        default: return state;
    }
}


export default queueReducer