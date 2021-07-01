import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyAFfKvPAyiES8rMUWir4acUHU1g61SGKWo',
  authDomain: 'asyncronous-ball-movement.firebaseapp.com',
  databaseURL: 'https://asyncronous-ball-movement.firebaseio.com',
  projectId: 'asyncronous-ball-movement',
  storageBucket: 'asyncronous-ball-movement.appspot.com',
  messagingSenderId: '763484808076',
  appId: '1:763484808076:web:e3b216eafbf4b74023eca9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
