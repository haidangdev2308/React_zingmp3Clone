import appReducer from "./appReducer";
import { combineReducers } from "redux";
//combineReducers để gom các reducer lại với nhau

const rootReducer = combineReducers({
    app: appReducer,
})

export default rootReducer