// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/storage";
import "firebase/analytics";

// Firebase configs
import { firebaseConfig } from "../configs/firebaseConfig";

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const storage = firebase.storage();




const Firebase = {};
Firebase.install = function (app) {

    app.provide("$firebase", {
        analytics,
        storage
    });

    console.log("Firebase initialized.")
};

export default Firebase;