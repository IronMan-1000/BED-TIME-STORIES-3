import firebase from 'firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyAjxbMkBfOA9TwCrR4w8CLR4vbuQSPM5hU",
    authDomain: "project-84e25.firebaseapp.com",
    databaseURL: "https://project-84e25.firebaseio.com",
    projectId: "project-84e25",
    storageBucket: "project-84e25.appspot.com",
    messagingSenderId: "701979146666",
    appId: "1:701979146666:web:ae81425bb6b145d2b9d3d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase