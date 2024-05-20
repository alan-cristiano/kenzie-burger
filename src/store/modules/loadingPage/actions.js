import { SET_LOADING } from "./actionTypes";

const loadingPageAction = (value) => {
    return {
        type: SET_LOADING,
        value,
    };
};

export { loadingPageAction };
