import {show} from '../api';
import showsFetchActions from '../actions/shows';

const showMiddleware = store => next => action => {
    const request = showsFetchActions.showRequest;
    const success = showsFetchActions.showSuccess;
    const failure = showsFetchActions.showFailure;

    if(action.type === request.toString()){
        show(action.payload)
        .then(series => {
            store.dispatch(success(series));
        })
        .catch(error => {
            store.dispatch(failure(error));
        });
    }

    return next(action);
}

export default showMiddleware;