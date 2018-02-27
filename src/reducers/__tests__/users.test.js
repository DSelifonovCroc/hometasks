import user from '../users';
import {fetchUserFailure, fetchUserSuccess, fetchUserRequest} from '../../actions/users';

describe('user reducer', () => {

    describe('fetchUserRequest action... ', () => {
        it('...sets "isFetching" to true', () => {
            const next = user(undefined, fetchUserRequest());
        
            expect(next.isFetching).toEqual(true);
        });
        
        it('...clears user data', () => {
            const next = user(undefined, fetchUserRequest());
        
            expect(next.user).toEqual(null);
        });

        it('...clears error data', () => {
            const next = user(undefined, fetchUserRequest());
        
            expect(next.error).toEqual(null);
        });
    });

    describe('fetchUserFailure action... ', () => {
        it('...sets "isFetching" to false', () => {
            const next = user(undefined, fetchUserFailure());
        
            expect(next.isFetching).toEqual(false);
        });

        it('...sets error data', () => {
            const error = new Error('test');
            const next = user(undefined, fetchUserFailure(error));

            expect(next.error).toEqual(true);
        });
    });

    describe('fetchUserSuccess action... ', () => {
        it('...fills user data', () => {
            const payload = {data: {login: "test"}}
            const next = user(undefined, fetchUserSuccess(payload));
        
            expect(next.user).toEqual(payload);
          });
    });
});