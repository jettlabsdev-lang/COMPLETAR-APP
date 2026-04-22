import {
  APP_ENV,
  API_URL,
  GOOGLE_MAPS_API_KEY,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from '@env';

export const config = {
  env: APP_ENV,
  isDev: APP_ENV === 'development',
  isStaging: APP_ENV === 'staging',
  isProd: APP_ENV === 'production',
  apiUrl: API_URL,
  googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  firebase: {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
  },
} as const;
