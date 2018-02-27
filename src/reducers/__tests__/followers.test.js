import followers from '../followers';
import {fetchFollowersFailure, fetchFollowersRequest, fetchFollowersSuccess} from '../../actions/users';

describe('user reducer', () => {

    describe('fetchFollowersRequest action... ', () => {
        it('...sets "isFetching" to true', () => {
            const next = followers(undefined, fetchFollowersRequest());
            
            expect(next.isFetching).toEqual(true);
        });
        
        it('...clears user data', () => {
            const next = followers(undefined, fetchFollowersRequest());
        
            expect(next.followers).toEqual([]);
        });

        it('...clears error data', () => {
            const next = followers(undefined, fetchFollowersRequest());
        
            expect(next.error).toEqual(null);
        });
    });

    describe('fetchFollowersFailure action... ', () => {
        it('...sets "isFetching" to false', () => {
            const next = followers(undefined, fetchFollowersFailure());
        
            expect(next.isFetching).toEqual(false);
        });

        it('...sets error data', () => {
            const payload = new Error('test');
            const next = followers(undefined, fetchFollowersFailure(payload));
            
            expect(next.error).toEqual(true);
        });
    });

    describe('fetchFollowersSuccess action... ', () => {
        it('...fills followers data', () => {
            const payload = [{login: "test1"}, {login: "test2"}, {login: "test3"}]
            const next = followers(undefined, fetchFollowersSuccess(payload));
        
            expect(next.followers).toEqual(payload);
          });
    });
});