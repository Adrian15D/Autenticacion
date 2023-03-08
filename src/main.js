import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import {getAuth, onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiLVxD6ypyQd_bWczkUlI7iM4n24mMsFQ",
  authDomain: "fir-d2434.firebaseapp.com",
  projectId: "fir-d2434",
  storageBucket: "fir-d2434.appspot.com",
  messagingSenderId: "343507656503",
  appId: "1:343507656503:web:f9f11b903cb2a3341dc4b2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


// Función 
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
      const usuarioActivo ={
        email: user.email,
        uid: user.uid
      }
     store.dispatch('detectarUsuario', usuarioActivo)
     console.log(usuarioActivo)
    // ...
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
    // User is signed out
    // ...
  } 
});

// Initialize Firebase

createApp(App).use(store).use(router).mount('#app')
