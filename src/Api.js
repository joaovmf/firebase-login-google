import firebase from 'firebase'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig) 
const db = firebaseApp.firestore();

/* eslint-disable */
export default {
    googleLogin: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider)
        return result;
    }
}