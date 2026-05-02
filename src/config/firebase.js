import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBqT3ZTnO8Y1pBaKZh1-rJWB6XKUWI6KSI",
  authDomain: "auth-project-79ea7.firebaseapp.com",
  projectId: "auth-project-79ea7",
  storageBucket: "auth-project-79ea7.firebasestorage.app",
  messagingSenderId: "69732072984",
  appId: "1:69732072984:web:3d1baebaa8d92c039dcd6d",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app); 