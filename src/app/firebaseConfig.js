import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAGsJkHoPVVHj4L_X3P_4faSFCiaFbbamE",
  authDomain: "loginsimulator-c50a4.firebaseapp.com",
  projectId: "loginsimulator-c50a4",
  storageBucket: "loginsimulator-c50a4.appspot.com",
  messagingSenderId: "925946364945",
  appId: "1:925946364945:web:87b5162966cac505a99db0",
  measurementId: "G-EWQ2X9FTVJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };