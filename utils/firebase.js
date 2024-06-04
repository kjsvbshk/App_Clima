import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/firebase-config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const onRegister = async (email, password, role, username) => {
    try {

        const response = await onRegisterUserDoc(email, role, username)

        if (response) {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user;

            console.log(user)
            alert("Usuario Creado Correctamente seras redirigido a la pagina principal");
        }
    } catch (error) {
        alert("Error al crear usuario"+error.message);
        console.log(error)
    }
}

export const onLogin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        alert("La sesion se ha iniciado sesion correctamente");
        console.log("Se inicio sesion correctamente")
    } catch (error) {
        alert("Error al iniciar sesion: "+error.message);
        console.log(error)
    }
}

export const onLogout = async () => {
    try {
        await signOut(auth)
        console.log("Se cerro sesion correctamente");
        alert("La sesion se ha cerrado correctamente");
    } catch (error) {
        alert("Error al cerrar sesion: " + error.message);
        console.log(error)
    }
}

const onRegisterUserDoc = async (email, role, username) => {
    try {
        console.log("Creando coleccion")

        await addDoc(collection(db, "Datos"), {
            usuario: username,
            correo: email,
            roles: role
        });

        return true

    } catch (error) {
        alert("Error al subir los datos: " + error.message);
        console.error("Error al subir los datos", error);

        return false
    }
}