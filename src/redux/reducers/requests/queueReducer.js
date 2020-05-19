import * as QueueType from '../../actions/actionTypes/requests/queueTypes'

const INITIAL_STATE = {
    _groups : new Map(), //{category : [groupitems]}
    _activeGroupCategory : "date",
    _searchTags : new Map(),
    _pinnedItems : new Map({}), // {{item}, isGone}
    _queueItems : new Map([
        [ id , null ],
        [ data, {} ],
        [ state, new Map([
            [viewed, false],
            [pinned, false]
        ])]
    ])
}


const queueReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
    
        case QueueType.INIT_QUEUE:

            let myGroups = new Map(state.groups)
            action.payload.myGroups.forEach( group => myGroups.set( group.category, group.groupItems ))

            return {
                ...state,
                queueItems : action.payload.items.map((item) => {
                    return {
                        id : item.id,
                        viewed : false,
                        item,
                    }
                }),
                unpinnedItems : action.payload.items.filter( itemID => action.payload.myPinnedItems.indexOf(itemID) === -1 ),
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
                pinnedItems : [...state.pinnedItems].push({ itemID : action.payload , isGone: false }),
                queueItems : [...state.queueItems.filter(item => item !== action.payload)]
            }

        case QueueType.REMOVE_PINNED_ITEM:

            return {
                ...state,
                queueItems : [...state.queueItems].push(action.payload),
                pinnedItems : state.pinnedItems.filter(item => item.itemID !== action.payload),
                
            }

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

        case QueueType.SET_ITEM_VIEWED:
            
            // console.log("reducer solicita actualizacion para ", action.payload)
            // let myQueueItems = [...state.queueItems.filter(item => item.id !== action.payload)];
            // let myFilteredItem =  [...state.queueItems.filter(item => item.id === action.payload)][0]
            // console.log("Mi Lista: ", myQueueItems)
            // console.log("Mi Item: ", myFilteredItem)
            
            return {
                
                ...state,
                queueItems : [...state.queueItems
                    .filter(item => item.id !== action.payload)]
                    .push(state.queueItems.find(item => item.id === action.payload).viewed = true)
            }
        

        default: return state;
    }
}


export default queueReducer