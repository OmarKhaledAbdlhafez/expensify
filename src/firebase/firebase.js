import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARGPCIBf7UXYUIHYxozW8VSrzvQe9NfBk",
    authDomain: "expensify-8d505.firebaseapp.com",
    databaseURL: "https://expensify-8d505.firebaseio.com",
    projectId: "expensify-8d505",
    storageBucket: "expensify-8d505.appspot.com",
    messagingSenderId: "785251639314",
    appId: "1:785251639314:web:ef8c9be98f6e24ecf178cb",
    measurementId: "G-3K79RGFMYZ"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  export { firebase, database as default };