export default (state = {}, action) => {
    switch (action.type) {
        case "SET_PROGRESS_BAR":
            return {
                ...state,
                progressBarStatus: action.isOpen
            };

        default:
            return state;
    }
};
