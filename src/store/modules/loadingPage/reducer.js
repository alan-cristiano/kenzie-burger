const initialState = true;

const loadingPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOADING": {
            const { value } = action;
            return value;
        }

        default:
            return state;
    }
};

export default loadingPageReducer;
