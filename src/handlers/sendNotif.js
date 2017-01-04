import config from '../../config/config.json';

const AUTHORIZATION = 'AAAAtMjnkeY:APA91bG8EvpcStvyPI-UgRs76lLDBcXKW0H-NJaptsG-SjxM4dEdhI__oYDOYnK3cTUSy2zgf7AoaB76ZUZ_QzCq0GsM1Ub_PvD9BggQaq-UENXeijxuRiZqDGB6eap9ozo7dyK8rqpuENUHyRqjkr-7nNMMR88qbg';

export default (recieverToken, data) => 
    fetch(config.firebase_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `key=${AUTHORIZATION}`
        },
        body: JSON.stringify({
            "to" : recieverToken,
            "data" : {
                "text": "Hello world"
            },
            "notification": {
                "title": "Portugal vs. Denmark",
                "body": "5 to 1"
            }
        })
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log('the exception from FCM is: ', err);
    })