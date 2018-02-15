import {createActions} from 'redux-actions';

const showsFetchActions = createActions({
    SHOW_REQUEST: undefined,
    SHOW_SUCCESS: undefined,
    SHOW_FAILURE: undefined
});

export default showsFetchActions;