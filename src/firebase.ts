import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDAy5VYPlIF_ePisET45T1ga5CYVSWwXIE",
  authDomain: "lol-syosinsya-guide.firebaseapp.com",
  projectId: "lol-syosinsya-guide",
  storageBucket: "lol-syosinsya-guide.appspot.com",
  messagingSenderId: "329748244994",
  appId: "1:329748244994:web:abcdefgh1234567",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
