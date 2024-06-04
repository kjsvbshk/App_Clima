function obtenerRecomendaciones(temperatura) {
    let recomendacion, precaucion, fenomeno;

    if (temperatura <=12) {
        recomendacion = "Abrígate bien, usa gorro y bufanda. Evita permanecer mucho tiempo al aire libre. Posibilidad de nevadas y heladas.";
        precaucion = "Evita permanecer mucho tiempo al aire libre.";
        fenomeno = "Posibilidad de nevadas y heladas.";
    } if (temperatura >=13) {
        recomendacion = "Disfruta del clima agradable al aire libre. Protégete del sol y lleva agua contigo. Condiciones climáticas favorables.";
        precaucion = "Protégete del sol y lleva agua contigo.";
        fenomeno = "Condiciones climáticas favorables.";
    } if (temperatura >=20){
        recomendacion = "Mantente hidratado y busca lugares frescos. Evita la exposición prolongada al sol. Altas temperaturas y riesgo de insolación.";
        precaucion = "Evita la exposición prolongada al sol.";
        fenomeno = "Altas temperaturas y riesgo de insolación.";
    }

    return { recomendacion, precaucion, fenomeno };
}