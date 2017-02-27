import { AngularFireModule } from "angularfire2";

const config = {
    apiKey: "AIzaSyAf7qznTXZ6mnGSZ0O1gsbjf2c63Ev97rU",
    authDomain: "intexsoft-vadim.firebaseapp.com",
    databaseURL: "https://intexsoft-vadim.firebaseio.com",
    storageBucket: "intexsoft-vadim.appspot.com",
    messagingSenderId: "435588974297"
};

const FirebaseModule = AngularFireModule.initializeApp(config);

export default FirebaseModule;