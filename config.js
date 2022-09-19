import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDjoumKHBwXZCCBa-QTTpB95_Ju9AqVZM",
  authDomain: "buzzer-app-35239.firebaseapp.com",
  databaseURL: "https://buzzer-app-35239-default-rtdb.firebaseio.com",
  projectId: "buzzer-app-35239",
  storageBucket: "buzzer-app-35239.appspot.com",
  messagingSenderId: "869313035853",
  appId: "1:869313035853:web:7a18fec0fda777a0822604"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
