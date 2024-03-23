import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { initializeAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// const API_KEY = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: 'AIzaSyDkWC69rklVP4x89l4iBxXBRgp9ClD9p40',
  authDomain: 'test-582b2.firebaseapp.com',
  projectId: 'test-582b2',
  storageBucket: 'test-582b2.appspot.com',
  messagingSenderId: '925130837675',
  appId: '1:925130837675:web:d3470003dae1803bf931ee',
  databaseURL:
    'https://test-582b2-default-rtdb.europe-west1.firebasedatabase.app/',
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const database = getDatabase(app);
export const googleAuthProvider = new GoogleAuthProvider();
