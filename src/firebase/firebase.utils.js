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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email } = userAuth; 
        const createdAt = new Date ();

        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            )
        } catch (error){
            console.log('error creating user', error.message)
            }
    }

    return userRef;
}

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
