// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk6ZI_GUSG58cU2jHRHQl9fz2wcP12kp4",
  authDomain: "chat-app-140.firebaseapp.com",
  databaseURL: "https://chat-app-140-default-rtdb.firebaseio.com",
  projectId: "chat-app-140",
  storageBucket: "chat-app-140.appspot.com",
  messagingSenderId: "713882083589",
  appId: "1:713882083589:web:080e02a16a3b06430d176c",
  measurementId: "G-Z392QNLNTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = firebase.auth();
export const firestore = firebase.getFirestore(app);

export default firebase