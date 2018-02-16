import {createActions} from 'redux-actions';

const {fetchUserRequest, fetchUserSuccess, fetchUserFailure} = createActions(
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE',
);
const {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure,
} = createActions(
  'FETCH_FOLLOWERS_REQUEST',
  'FETCH_FOLLOWERS_SUCCESS',
  'FETCH_FOLLOWERS_FAILURE',
);

export {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure,
};
