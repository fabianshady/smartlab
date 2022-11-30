import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8AEqMAR3dihNjLeS24RUqraK_d5JHkRQ",
  authDomain: "smartlab-2a121.firebaseapp.com",
  databaseURL: "https://smartlab-2a121-default-rtdb.firebaseio.com",
  projectId: "smartlab-2a121",
  storageBucket: "smartlab-2a121.appspot.com",
  messagingSenderId: "603789767318",
  appId: "1:603789767318:web:71aa5a08e29f436fc208b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = ref(getDatabase(app));