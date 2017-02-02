require('isomorphic-fetch');
import sinon from 'sinon';
import { expect } from 'chai';
import { initializeWebPush } from './webPush';

const webPushStub = sinon.stub();
const webPushObject = { 
    setGCMAPIKey: () => {},
    generateVAPIDKeys: () => {},
    setVapidDetails: () => {}
};

before(() => {
    webPushStub.returns(webPushStub);
});

after(() => {
    webPushStub.reset();
});

describe("Web push Notification ", () => {
    it('should initializeWebPush', () => {
        initializeWebPush();
        expect(webPushStub.called);
        expect(webPushObject.setGCMAPIKey.called);
        expect(webPushObject.setVapidDetails.called);
    });
});