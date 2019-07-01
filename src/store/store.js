import { createStore , combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {franchisesFilterReducer} from "../reducers/franchisesFilterReducer";
import {personForFeedBackReducer} from "../reducers/personForFeedBackReducer";

const reducers = {
    form : formReducer,
    franchisesState : franchisesFilterReducer,
    personForFeedbackState : personForFeedBackReducer
};

const rootReducer = combineReducers(reducers);
let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

export default store;