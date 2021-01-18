import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyDhwcDvmnWBqAMPVAnRyTN3Ay7a1Pi84h4",
  authDomain: "fir-app-dbfdf.firebaseapp.com",
  databaseURL: "https://fir-app-dbfdf.firebaseio.com",
  projectId: "fir-app-dbfdf",
  storageBucket: "fir-app-dbfdf.appspot.com",
  messagingSenderId: "931174179247",
  appId: "1:931174179247:web:9d491dee7ab0547884cf5a",
  measurementId: "G-MBXCXQQXY1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

export default {
  db ,auth
}