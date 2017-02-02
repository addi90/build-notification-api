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
        const pushSubscriptionMock = JSON.parse("{\"endpoint\":\"https://fcm.googleapis.com/fcm/send/doHYdqDZ1Xo:APA91bGNDzIBMphCfJWTaEq6-GUhWdUjaAipwYCyC0WHaFurn9EDqEsLWYhiP63setKxR6D6aWRvnakd0HT-DfyDMBImxUE9UwOMB-gAvglnCIzDBxdgBho2gYTPcyFSwQCJERp3Dplc\",\"keys\":{\"p256dh\":\"BHDcGO4gAOZZNGXkx7tKja_Y51TC8xEKIM8lrNk2eVKhWrVEz4Q7Vr3BfxABI-LOHGJL51tgzGjaQjuGMvcnBok=\",\"auth\":\"ou62o6Eqod5ynV_pvVjkPA==\"}}");
        const respPromise = sendNotif(pushSubscriptionMock, {});

        expect(sendNotifStub.called);
        respPromise.then(res => {
            expect(res.status).to.eq(200);
        });
    });
});