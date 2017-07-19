 import firebase from 'firebase'
 const config = {
     apiKey: "AIzaSyCnaEQLBeh70LHV05x4Vk9FRF0SNb_D8XY",
     authDomain: "starbase-cac85.firebaseapp.com",
     databaseURL: "https://starbase-cac85.firebaseio.com",
     projectId: "starbase-cac85",
     storageBucket: "",
     messagingSenderId: "377801637608"
   };


export const firebaseApp =  firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events')
