import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDyEQ3dtgwYRTDWKgIQdDJZTgQ5brWzch8",
  authDomain: "zdrive-5dd02.firebaseapp.com",
  databaseURL: "https://zdrive-5dd02-default-rtdb.firebaseio.com",
  projectId: "zdrive-5dd02",
  storageBucket: "zdrive-5dd02.appspot.com",
  messagingSenderId: "650502202427",
  appId: "1:650502202427:web:245e15919960d40cf2e81e"
};

firebase.initializeApp(firebaseConfig);
export default firebase;