import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, onValue, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCYbUKQfnvRN6VuiyuADFEII6KZGm3NYAA",
    authDomain: "wagoatpro.firebaseapp.com",
    databaseURL: "https://wagoatpro-default-rtdb.firebaseio.com",
    projectId: "wagoatpro",
    storageBucket: "wagoatpro.appspot.com",
    messagingSenderId: "343439652327",
    appId: "1:343439652327:web:7dd33d0f0ebc020679b942",
    measurementId: "G-Q3SF7ZXB3H"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const starCountRef = ref(database, 'PLC');

onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    const anData = snapshot.val().IN1;
    console.log(data);
    console.log("An: " + anData);
document.getElementById('anHtmlId').innerHTML = anData;
});
