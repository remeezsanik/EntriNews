import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { newsReducer } from './reducers/newsReducer'


const reducers = combineReducers({
    newsReducer: newsReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(reducers, initialState, applyMiddleware(...middleware))


export default store
