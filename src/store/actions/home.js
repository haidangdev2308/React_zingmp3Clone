import actionTypes from "./actionTypes";
import * as apis from '../../apis'

//lấy hàm getHome từ apis (trả về action lấy api của home)
//dispatch là của redux-thunk trả vê reducer
export const getHome = () => async(dispatch) => {
    try {
        const response = await apis.getHome()
        if(response?.data.err === 0) {
            //haddle when success
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: response.data.data.items,
            })
        } else {
            //haddle when fail
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: null,
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_HOME,
            homeData: null,
        })
    }
}