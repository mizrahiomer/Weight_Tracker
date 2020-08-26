import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCineP9vsrd65kRnqoELaDX_IZyjNTdVGc',
	authDomain: 'playform-weight-tracker.firebaseapp.com',
	databaseURL: 'https://playform-weight-tracker.firebaseio.com',
	projectId: 'playform-weight-tracker',
	storageBucket: 'playform-weight-tracker.appspot.com',
	messagingSenderId: '254749338649',
	appId: '1:254749338649:web:a513389b1fc9ca47b90e88',
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.database().ref();
