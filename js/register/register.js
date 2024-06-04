import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { onRegister } from "../../utils/firebase";

onAuthStateChanged(auth, (user) => {
  if (user) {
    alert
    window.location.href = "./dashboard.html"
  }
})

document.getElementById("formulario-crear").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;

  onRegister(email, password, role, username)
});