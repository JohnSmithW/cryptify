import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCEfqTm3yLppYyk1rsYcEruzTr9ud4ESB4',
  authDomain: 'cryptify-caed2.firebaseapp.com',
  projectId: 'cryptify-caed2',
  storageBucket: 'cryptify-caed2.firebasestorage.app',
  messagingSenderId: '500150083144',
  appId: '1:500150083144:web:f763c9edb3c9626e01027d',
  measurementId: 'G-M1NY23GKNL',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
