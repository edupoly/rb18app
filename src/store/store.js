import todoReducer from "./todo.reducer";
import counterReducer from "./counter.reducer";
import {createStore,combineReducers} from 'redux'
const reducer = combineReducers({counter:counterReducer,todos:todoReducer})
const store = createStore(reducer)
export default store;