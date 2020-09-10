import * as firebase from 'firebase/app';
import 'firebase/firestore';
const config = {
  apiKey: "AIzaSyDWRsn-1kNVWvrpfQx0WDK33_1Cw_InCaU",
  authDomain: "chat-6c77c.firebaseapp.com",
  databaseURL: "https://chat-6c77c.firebaseio.com",
  projectId: "chat-6c77c",
  storageBucket: "chat-6c77c.appspot.com",
  messagingSenderId: "408445315705",
  appId: "1:408445315705:web:16921cd00d5c45cc8102a8",
  measurementId: "G-JSDBKS3XWS"
};
const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore();