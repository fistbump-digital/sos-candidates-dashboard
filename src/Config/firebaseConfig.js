import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDD9FayZJXFe5GGyKKih4q-9EZMzPJfI3o",
    authDomain: "jobs-app-dfeee.firebaseapp.com",
    databaseURL: "https://jobs-app-dfeee.firebaseio.com",
    projectId: "jobs-app-dfeee",
    storageBucket: "jobs-app-dfeee.appspot.com",
    messagingSenderId: "543805295350",
    appId: "1:543805295350:web:fd56ec32f022ebeb9fbad7"
};

firebase.initializeApp(firebaseConfig);

export default firebase