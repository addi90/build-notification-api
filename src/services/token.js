import { 
    firebase_storage_url
} from '../../config/config.json';

export const setTokenForUser = (userId, pushSubscription) =>
    fetch(`${firebase_storage_url}/users/${userId}.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pushSubscription)
    })

export const getTokenForUser = userId => 
    fetch(`${firebase_storage_url}/users/${userId}.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(data => JSON.parse(data));