import firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCE8OqQNAmRLSHv7MQrCz9HfWqtWV4Pcco",
    authDomain: "barter-app-83195.firebaseapp.com",
    projectId: "barter-app-83195",
    storageBucket: "barter-app-83195.appspot.com",
    messagingSenderId: "778546146289",
    appId: "1:778546146289:web:47243879a566ae4741f250"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();