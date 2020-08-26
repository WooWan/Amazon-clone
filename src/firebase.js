import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDl2yN8q7JsTtzLR5J7X0bzVB7vCkVoC1U",
  authDomain: "clone-df724.firebaseapp.com",
  databaseURL: "https://clone-df724.firebaseio.com",
  projectId: "clone-df724",
  storageBucket: "clone-df724.appspot.com",
  messagingSenderId: "119181950105",
  appId: "1:119181950105:web:7b0513a2bb09dc99318c08",
  measurementId: "G-YNCBELGET2",
});

const auth=firebase.auth();

export {db, auth};
