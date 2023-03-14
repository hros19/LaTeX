
let pts = [0, 1, 2, 3]; // Columnas del rubro
let por = [5, 7.5, 7.5, 15, 65] // filas del rubro

let PTS_MAX = 15; // El proye vale 100 pts
let PTS_MIN = 0;
let POR_MAX = 15; // El proye vale 15%
let POR_MIN = 0;
let CANT_FILAS = 5;

let filas = [3, 3, 2, 3, 3]; // Esto se cambia

function calcNota() {
    let i = 0;
    let nota = 0;
    let porcentaje = 0;
    for (i = 0; i < CANT_FILAS; i++) {
        nota += filas[i];
        porcentaje += filas[i] * por[i];
    }
    nota = (nota / (3*CANT_FILAS)) * PTS_MAX;
    porcentaje = porcentaje / 3 * (POR_MAX / PTS_MAX);
    console.log("Nota: " + nota);
    console.log("Porcentaje: " + porcentaje);
}

calcNota();