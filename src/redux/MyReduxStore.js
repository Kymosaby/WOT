import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers/index'

const Store = createStore (
    reducers, //todos mis reducers
    {}, //mi estado inicial
    applyMiddleware( reduxThunk ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

  export default Store
