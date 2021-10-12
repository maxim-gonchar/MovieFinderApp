import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './Reducer';

// const rootReducer = combineReducers({
//     data: reducer,
// })
export const store = createStore(reducer, applyMiddleware(thunk));