import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDs27uJWmeEvXeAVi6FJVB6udcprBtAZPI",
  authDomain: "proyectofinalreactj.firebaseapp.com",
  projectId: "proyectofinalreactj",
  storageBucket: "proyectofinalreactj.appspot.com",
  messagingSenderId: "217464390244",
  appId: "1:217464390244:web:e1a25941ce74c24e5a9571",
  measurementId: "G-KGBTW7QR82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
