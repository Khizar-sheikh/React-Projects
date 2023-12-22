import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByTrOq5oHb14PhPV3rRuNqD9X4wsiBaIg",
  authDomain: "disneyplus-clone-30c61.firebaseapp.com",
  projectId: "disneyplus-clone-30c61",
  storageBucket: "disneyplus-clone-30c61.appspot.com",
  messagingSenderId: "532551586485",
  appId: "1:532551586485:web:822370a5872c26b2f024fc",
  measurementId: "G-D9V1V8MZZF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
