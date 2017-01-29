import { 
    firebase_push_url, 
    firebase_auth 
} from '../../config/config.json';

export default (recieverToken, data) => 
    fetch(firebase_push_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `key=${firebase_auth}`
        },
        body: JSON.stringify({
            "to" : recieverToken,
            data,
            "notification": {
                "title": "Portugal vs. Denmark",
                "body": "5 to 1"
            }
        })
    })