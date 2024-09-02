import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCssqH-VHGQh9EIirQP_QknPTTivwRHvu8",
  authDomain: "crud-62f59.firebaseapp.com",
  projectId: "crud-62f59",
  storageBucket: "crud-62f59.appspot.com",
  messagingSenderId: "627414515541",
  appId: "1:627414515541:web:9e3219a08cfd08e69ef9dc",
  measurementId: "G-822VYJ7Y2G",
  databaseURL: "https://crud-62f59-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
