require('isomorphic-fetch');
import { expect } from 'chai';
import sinon from 'sinon';
import { setTokenForUser, getTokenForUser } from './token';

const setTokenForUserStub = sinon.stub();
const getTokenForUserStub = sinon.stub();
const responsePromise = Promise.resolve({ token: 'abcd-1234'});

before(() => {
    setTokenForUserStub.returns(responsePromise);
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
        // expect(setTokenForUser(userId, token)).to.eventually.eq({ token });
    })

    it('should be able to get saved token', () => {
        const userId = 1;
        const token = 'abcd-1234';
        setTokenForUser(userId, token);
        getTokenForUser(userId);
        
        expect(getTokenForUserStub).to.be.called;        
        // return expect(getTokenForUser(userId)).to.eventually.eq({ token });
    })

})