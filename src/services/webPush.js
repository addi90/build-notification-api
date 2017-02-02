import webpush from 'web-push';
import { 
    vapidPublicKey, 
    vapidPrivateKey 
} from '../../config/config.json';

export const initializeWebPush = () => {
    // Uncomment this if need to generate new VAPID keys
    // const vapidKeys = webpush.generateVAPIDKeys();
    // console.log('Vapid keys', vapidKeys);

    webpush.setGCMAPIKey('776464732646');
    webpush.setVapidDetails(
        'mailto:adisinghrajput@gmail.com',
        vapidPublicKey,
        vapidPrivateKey
    );
}
