import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
   apiKey: "AIzaSyBHfB9adSgkTFsrXbgH_bdtNZW_HM61U2c",
   authDomain: "jf-sol.firebaseapp.com",
   projectId: "jf-sol",
   storageBucket: "jf-sol.appspot.com",
   messagingSenderId: "337441756696",
   appId: "1:337441756696:web:33aa39398047f538c4d56d",
   measurementId: "G-1JPE1SNRWY"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
