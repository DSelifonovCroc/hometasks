import {createActions} from 'redux-actions';

const searchFetchActions = createActions({
    SEARCH_REQUEST: undefined,
    SEARCH_SUCCESS: undefined,
    SEARCH_FAILURE: undefined
});

export default searchFetchActions;