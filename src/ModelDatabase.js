import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyC8ABr5E9vFqXXP57psd1oHAAS4kUneN88",
  authDomain: "vestmark-firebase-db.firebaseapp.com",
  databaseURL: "https://vestmark-firebase-db.firebaseio.com",
  projectId: "vestmark-firebase-db",
  storageBucket: "vestmark-firebase-db.appspot.com",
  messagingSenderId: "728468870310"
};

let app = Firebase.initializeApp(config);
let db = app.database();

export default db;
