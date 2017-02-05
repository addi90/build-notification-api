import webpush from 'web-push';

export default (pushSubscription, data) => 
    webpush.sendNotification(
        pushSubscription,
        JSON.stringify(data.comment)
    )
    .then(console.log)
    .catch(console.log);