require('isomorphic-fetch');
import { expect } from 'chai';
import sinon from 'sinon';
import { setTokenForUser, getTokenForUser } from './token';

const setTokenForUserStub = sinon.stub();
const getTokenForUserStub = sinon.stub();
const responsePromise = Promise.resolve({ token: 'abcd-1234'});

before(() => {
    getTokenForUserStub.returns(responsePromise);
});

after(() => {
    getTokenForUserStub.reset();
    setTokenForUserStub.reset();
});

describe('Token service', () => {
    it('should be able to save token', () => {
        const userId = 1;
        const token = 'abcd-1234';
        setTokenForUser(userId, token);
        expect(setTokenForUserStub).to.be.called;
    })

    it('should be able to get saved token', () => {
        const userId = 1;
        const token = 'abcd-1234';
        setTokenForUser(userId, token);
        getTokenForUser(userId);
        
        expect(getTokenForUserStub).to.be.called;        
        getTokenForUser(userId)
            .then(t => expect(t).to.eq({ token }));
    })

})