import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase/firebase-config";
import { onLogin } from "../../utils/firebase";

onAuthStateChanged(auth, (user) => {
  if(user) {
    console.log("Existe sesion")
    window.location.href = "./dashboard.html"
  } else {
    console.log("No existe sesion")
  }
})

document.getElementById("formulario-sesion").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  onLogin(email, password)
});