require('isomorphic-fetch');
import sinon from 'sinon';
import { expect } from 'chai';
import sendNotif from './sendNotif';

const sendNotifStub = sinon.stub();
const responsePromise = Promise.resolve({ text: 'success'});

before(() => {
    sendNotifStub.returns(responsePromise);
});

after(() => {
    sendNotifStub.reset();
});

describe("Send Notification ", () => {
    it('should send a notification', () => {
        const pushSubscriptionMock = JSON.parse("{\"endpoint\":\"https://dummy.com/endpoint\",\"keys\":{\"p256dh\":\"dummy-key\",\"auth\":\"dummy==auth\"}}");
        const respPromise = sendNotif(pushSubscriptionMock, {});

        expect(sendNotifStub.called);
        respPromise.then(res => {
            expect(res.status).to.eq(200);
        });
    });
});