import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
    apiKey: "AIzaSyBhJIm0YictgtDgL8eDJAtsiHLeBHYPwgw",
    authDomain: "crwn-db-1c212.firebaseapp.com",
    databaseURL: "https://crwn-db-1c212.firebaseio.com",
    projectId: "crwn-db-1c212",
    storageBucket: "crwn-db-1c212.appspot.com",
    messagingSenderId: "907834430986",
    appId: "1:907834430986:web:3749e254bfe464dba031f3",
    measurementId: "G-ZH6EJW6WDM"
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
