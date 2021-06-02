import firebase from "@firebase/app";
import "@firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAmfOVXbw4RhLxy35WQeYUaTblvy_BDOHU",
	authDomain: "bakeswitch-orbital.firebaseapp.com",
	projectId: "bakeswitch-orbital",
	storageBucket: "bakeswitch-orbital.appspot.com",
	messagingSenderId: "1097478969661",
	appId: "1:1097478969661:web:1ae4ddb4911a2de150cd54",
	measurementId: "G-SJY0D853EQ",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
//Set auth state to persist until user logs out
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, GoogleAuthProvider };
export default app;
