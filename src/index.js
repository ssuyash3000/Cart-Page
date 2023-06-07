import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
////////////////////////////////////////////////////////////////////////////
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
/////////////////////////////////////////////////////////////////////////////
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/////////////////////////////////////////////////////////////////////////////
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiFvm4M7yLViBCvjIYxHaJKNWcrEBA8iI",
  authDomain: "cart-page-48d06.firebaseapp.com",
  projectId: "cart-page-48d06",
  storageBucket: "cart-page-48d06.appspot.com",
  messagingSenderId: "198620950850",
  appId: "1:198620950850:web:0bcf9708b704ce93bb98db"
};
/////////////////////////////////////////////////////////////////////////////
// Initialize Firebase - Web Namespaced API version
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
/////////////////////////////////////////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

