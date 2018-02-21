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
  

  

  

//   it('экшен с типом CREATE_ORDER увеличивает profit на action.payload.price', () => {
//     const next = user(undefined, {
//       type: CREATE_ORDER,
//       payload: {price: 111}
//     });
//     expect(next.profit).toEqual(111);
//   });

//   it('экшен с типом MOVE_ORDER_TO_FARM увеличивает farmExpanse на 100', () => {
//     const next = user(undefined, {
//       type: MOVE_ORDER_TO_FARM
//     });
//     expect(next.farmExpanse).toEqual(100);
//   });
});