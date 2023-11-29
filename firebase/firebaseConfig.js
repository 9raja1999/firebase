
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref, get, child, onChildAdded, push } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getStorage, ref as Sref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAI3WhEBu62QTbdtGXYFjM7KZnDmThkNEk",
    authDomain: "crud-5df5d.firebaseapp.com",
    databaseURL: "https://crud-5df5d-default-rtdb.firebaseio.com",
    projectId: "crud-5df5d",
    storageBucket: "crud-5df5d.appspot.com",
    messagingSenderId: "706114372381",
    appId: "1:706114372381:web:8b2281c767cb926c2457f4",
    measurementId: "G-KLE2GJERPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()


export {
    app,
    db,
    child,
    set,
    ref,
    get,
    getStorage,
    uploadBytesResumable,
    Sref,
    getDownloadURL,
    onChildAdded,
    push,

}
