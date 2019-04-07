import sampleApi from "../api/sampleApi";

/**
 * The basic of how an action should be implemented.
 *
 * @since   1.0
 */
export const sampleFunction = payload => {
    return {
        type: "SAMPLE_FUNCTION",
        payload: payload
    };
};

/**
 * A sample of how to make request in an action. This function requires
 * @import sampleApi and a middleware such as redux-thunk.
 *
 * Async & await are important syntax to make sure that the action creator is called
 * only when we have successfully fetched the data.
 *
 * @since   1.0
 */
export const sampleRequest = () => async (dispatch, getState) => {
    const response = await sampleApi.get("/posts");

    dispatch({
        type: "SAMPLE_REQUEST",
        payload: response.data
    });
};

/**
 * Set progress bar.
 *
 * @param   boolean     isOpen  Set to true if we're showing the progress bar.
 * @since   1.0
 */
export const setProgressBar = isOpen => ({
    type: "SET_PROGRESS_BAR",
    isOpen: isOpen
});

/**
 * Set the current page.
 *
 * @param   string     path     The page path (usually the root).
 * @since   1.0
 */
export const setCurrentPage = path => ({
    type: "SET_CURRENT_PAGE",
    payload: path
});
