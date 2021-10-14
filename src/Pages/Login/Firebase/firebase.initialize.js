import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const initializeFirebaseConfig = ()=>{
    initializeApp(firebaseConfig);
    
}
export default initializeFirebaseConfig;