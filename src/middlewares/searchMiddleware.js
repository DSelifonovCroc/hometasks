import {search} from '../api';
import searchFetchActions from '../actions/search';

const searchMiddleware = store => next => action => {
    const request = searchFetchActions.searchRequest;
    const success = searchFetchActions.searchSuccess;
    const failure = searchFetchActions.searchFailure;

    if(action.type === request.toString()){
        search(action.payload)
        .then(series => {
            store.dispatch(success(series));
        })
        .catch(error => {
            store.dispatch(failure(error));
        });
    }

    return next(action);
}

export default searchMiddleware;