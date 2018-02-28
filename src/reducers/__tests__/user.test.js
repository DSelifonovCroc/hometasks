import user from '../user';
import {fetchUserFailure, fetchUserSuccess, fetchUserRequest} from '../../actions/user';

import {
  reducerFailureTest,
  reducerValueTest, 
  reducerClearFieldTest
} from '../../utils/testHelpers';

describe('user reducer', () => {

  describe('fetchUserRequest action... ', () => {
    reducerValueTest(user, fetchUserRequest, 'isFetching', true);
    reducerClearFieldTest(user, fetchUserRequest, 'info');
    reducerClearFieldTest(user, fetchUserRequest, 'error');
  });

    describe('fetchUserFailure action... ', () => {
      reducerValueTest(user, fetchUserFailure, 'isFetching', false);
      reducerFailureTest(user, fetchUserFailure);
    });

  describe('fetchUserSuccess action... ', () => {
    reducerValueTest(user, fetchUserSuccess, 'info');
  });
});