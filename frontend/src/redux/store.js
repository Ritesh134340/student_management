import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import {reducer as AuthReducer} from "../redux/authRedux/reducer";
import {reducer as AppReducer} from "../redux/appRedux/reducer";
import thunk from "redux-thunk";

const reducer=combineReducers({AuthReducer,AppReducer});

const store=legacy_createStore(reducer,applyMiddleware(thunk));

export {store}