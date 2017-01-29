import { 
    firebase_storage_url
} from '../../config/config.json';

// TODO: Replace this by Firebase storage
export const setTokenForUser = (userId, token) =>
    fetch(`${firebase_storage_url}/users/${userId}.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })

export const getTokenForUser = userId => 
    fetch(`${firebase_storage_url}/users/${userId}.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(data => data);