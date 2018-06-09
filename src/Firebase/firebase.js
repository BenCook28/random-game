import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyA3aCluPmXXUKg5rTWDYBP5XT-rKLQmq1I",
    authDomain: "random-game-9d370.firebaseapp.com",
    databaseURL: "https://random-game-9d370.firebaseio.com",
    projectId: "random-game-9d370",
    storageBucket: "random-game-9d370.appspot.com",
    messagingSenderId: "1013494147540"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}