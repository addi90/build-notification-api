import { expect } from 'chai';
import { setTokenForUser, getTokenForUser } from './token';

describe('Token service', () => {
    it('should be able to save token', () => {
        const userId = 1;
        const token = 'mock token';
        expect(setTokenForUser(userId, token)).to.eq(token);
    })

    it('should be able to get saved token', () => {
        const userId = 1;
        const token = 'mock token';
        setTokenForUser(userId, token);
        expect(getTokenForUser(userId)).to.eq(token);
    })

})