import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "./index.html"
        alert("No has iniciado sesion")
    } 
})