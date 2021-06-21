import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvqIIMlrGRMYEPdagLtBy9FJK-5LlRXic",
  authDomain: "linkedln-react-clone.firebaseapp.com",
  projectId: "linkedln-react-clone",
  storageBucket: "linkedln-react-clone.appspot.com",
  messagingSenderId: "151101787908",
  appId: "1:151101787908:web:04789c3c377d57ed914a51",
  measurementId: "G-LSLGFBE0XE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
