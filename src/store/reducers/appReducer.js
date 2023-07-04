import actionTypes from "../actions/actionTypes";

const initState = {//giá trị khởi đầu của state
    banner: [],
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME://nếu type action trùng tên key của actionTypes thì thực hiện
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner').items || null
            }
        default:
            return state
    }
}

export default appReducer