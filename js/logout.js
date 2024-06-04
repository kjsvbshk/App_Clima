import { onAuthStateChanged } from "firebase/auth";
import { onLogout } from "../utils/firebase";
import { auth } from "../firebase/firebase-config";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../../index.html";
  }
})
document.getElementById("logoutButton").addEventListener("click", () => {
  onLogout()
});