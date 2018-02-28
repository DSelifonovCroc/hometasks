import auth from '../auth';
import {authorizeRequest, authorizeFailure, authorizeSuccess, logout} from '../../actions/auth';

import {
  reducerFailureTest, 
  reducerValueTest, 
  reducerClearFieldTest
} from '../../utils/testHelpers';

describe('auth reducer', () => {

  describe('authorizeRequest action... ', () => {
    reducerValueTest(auth, authorizeRequest, 'isFetching', true);
  });

  describe('authorizeFailure action... ', () => {
    reducerValueTest(auth, authorizeFailure, 'isFetching', false);
    reducerValueTest(auth, authorizeFailure, 'isAuthorized', false);
    reducerFailureTest(auth, authorizeFailure);
  });

  describe('authorizeSuccess action... ', () => {
    reducerValueTest(auth, authorizeSuccess, 'isFetching', false);
    reducerValueTest(auth, authorizeSuccess, 'isAuthorized', true);
  });

  describe('logout action... ', () => {
    reducerValueTest(auth, logout, 'isFetching', false);
    reducerValueTest(auth, logout, 'isAuthorized', false);
  });
});