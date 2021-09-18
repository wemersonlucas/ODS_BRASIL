import firebase from "firebase/compat/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyA8UDusSBb3mJpTyyeTU0ymQvBwd9P0ZtM",
  authDomain: "controle-financeiro-bd1da.firebaseapp.com",
  projectId: "controle-financeiro-bd1da",
  storageBucket: "controle-financeiro-bd1da.appspot.com",
  messagingSenderId: "640067465800",
  appId: "1:640067465800:web:6c559e551d9438c0665e7d",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
