import firebase from "firebase"

const firebaseConfig = {
 apiKey: "AIzaSyCFgbIUxjAS6lOAX3gztHYfGOo-aWxUQdg",
 authDomain: "react-facebook-clone-502d2.firebaseapp.com",
 projectId: "react-facebook-clone-502d2",
 storageBucket: "react-facebook-clone-502d2.appspot.com",
 messagingSenderId: "1042435501322",
 appId: "1:1042435501322:web:ee552efd2646b08fcd5ef3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db