 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyB14Rj8IBjvoyytcjG-Lhv-FLdJgiMTC2s",
  authDomain: "net-ninja-plan-2a2d9.firebaseapp.com",
  databaseURL: "https://net-ninja-plan-2a2d9.firebaseio.com",
  projectId: "net-ninja-plan-2a2d9",
  storageBucket: "net-ninja-plan-2a2d9.appspot.com",
  messagingSenderId: "1095352904525"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;