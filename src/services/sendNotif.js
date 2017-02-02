import webpush from 'web-push';

export default (pushSubscription, data) => 
    webpush.sendNotification(
        pushSubscription,
        JSON.stringify(data)
    )
    .then(console.log)
    .catch(console.log);