import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuPcFRHOQxJPzAClN-So8XtXPDJc8JUsw",
    authDomain: "heart-clicker-182e8.firebaseapp.com",
    databaseURL: "https://heart-clicker-182e8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "heart-clicker-182e8",
    storageBucket: "heart-clicker-182e8.appspot.com",
    messagingSenderId: "991105357244",
    appId: "1:991105357244:web:a1210b533fe37484e9c7b9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const firebaseCountRef = db.ref('/count');

const registerToCounts = (onValue) => {
     firebaseCountRef.on('value', snapshot => onValue(snapshot.val()));
}

const addClick = () => {
    firebaseCountRef.transaction(function(count) {
        return count + 1;
    })
}

export {addClick, registerToCounts}
