import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import"firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyC_OeLbnYEn6zqiVy-7ilqHihSsepTMlys",
    authDomain: "almedina-hardware.firebaseapp.com",
    projectId: "almedina-hardware",
    storageBucket: "almedina-hardware.appspot.com",
    messagingSenderId: "967410439718",
    appId: "1:967410439718:web:8b3e5f90e906be4d31b8e7"
  };
  const app = initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
  export{auth,db,storage}  