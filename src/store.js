import { createStore } from 'redux';


/**
 * Created a dummy user as logged in and gave id as 1 to fetch her/his followings posts.
 */

let initialState = {
    userName: "",
    userId: 1
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, userName: action.payload }

        default:
            break;
    }
}

let store = createStore(reducer);
export default store;