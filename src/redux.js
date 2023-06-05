import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
//applyMiddleware là để sử dụng các middleware trong redux
import thunk from "redux-thunk";
//thunk giúp viết bất đồng bộ khi dùng redux
//Thunk là middleware giúp action trả về 1 hàm gọi api

const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}

export default reduxConfig //export 1 hàm ko phải 1 biến, phải gọi hàm mới dùng được biến store trả về
