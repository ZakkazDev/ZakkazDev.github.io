import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseApp = initializeApp({

    apiKey: "AIzaSyBqRIph5BINdmT_yeQGcyQO7ADbphxOUE8",
  
    authDomain: "zakfarahcom.firebaseapp.com",
  
    projectId: "zakfarahcom",
  
    storageBucket: "zakfarahcom.firebasestorage.app",
  
    messagingSenderId: "314842605197",
  
    appId: "1:314842605197:web:3adcf6416ef0ceb1e9a4c4",
  
    measurementId: "G-DMG6HMV2YG"
  
});

const auth =  getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('Logged in!');
    } else {
        console.log('No user');
    }
});