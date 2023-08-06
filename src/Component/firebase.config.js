// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('secret key', import.meta.env.VITE_apiKey)
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyCA8bEASEMwTr8DzBn6VZqNISHdRUZDgp4",
  authDomain: "toy-kingdom-11ef9.firebaseapp.com",
  projectId: "toy-kingdom-11ef9",
  storageBucket: "toy-kingdom-11ef9.appspot.com",
  messagingSenderId: "221453073744",
  appId: "1:221453073744:web:8cee5841ada77e2d718055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app