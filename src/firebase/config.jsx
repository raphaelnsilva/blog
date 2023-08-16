import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7lcwQgP0kYOaB96DiSeecDlwbVIxL8os",
  authDomain: "blog-1332d.firebaseapp.com",
  projectId: "blog-1332d",
  storageBucket: "blog-1332d.appspot.com",
  messagingSenderId: "356624747333",
  appId: "1:356624747333:web:06429036b5e49ee54dcc2c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };