import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDlyuCdcMtJiz6d2zVDdpNsdoxDS_wMoe0",
    authDomain: "fir-6e05d.firebaseapp.com",
    projectId: "fir-6e05d",
    storageBucket: "fir-6e05d.appspot.com",
    messagingSenderId: "57347299886",
    appId: "1:57347299886:web:3bbf4394deb7193476ddbf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db , auth, provider}