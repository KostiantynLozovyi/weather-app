import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { initialStateContentData, stateInterface } from '../reducers/contentReducer';
import rootReducer from '../reducers/rootReducer';

const initialState: initialStateInterface = {
    contentReducer: initialStateContentData,
};

export interface initialStateInterface {
    contentReducer: stateInterface;
}

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);