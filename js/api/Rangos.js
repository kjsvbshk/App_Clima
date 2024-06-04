function obtenerRangos(temperatura) {
    let rango;
    let imagenRango; 

    if (temperatura <=12) {
        imagenRango = '../public/assets/T.frio.png';
        rango = "Frio";
    }  if (temperatura >= 13) {
        imagenRango = '../public/assets/T.frio.png';
        rango = "Templado";
    } if (temperatura >=20) {
        imagenRango = '../public/assets/T.frio.png';
        rango = "Calor";
    }

    return { imagenRango, rango };
}