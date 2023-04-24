import { store } from "../store/dogStore";

const dogReducer = (state = store, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default dogReducer;