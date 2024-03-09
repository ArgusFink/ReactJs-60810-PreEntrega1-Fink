import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA6GiEdwVvkDtzrP_P47fhxE0A3XDCBYyk",
  authDomain: "playinthesky-ad4ba.firebaseapp.com",
  projectId: "playinthesky-ad4ba",
  storageBucket: "playinthesky-ad4ba.appspot.com",
  messagingSenderId: "226952195472",
  appId: "1:226952195472:web:cbf93f6bcf9325518b9715"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />

  </React.StrictMode>,
)