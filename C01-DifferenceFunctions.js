/* Regular Function ~ Función Regular*/
var resultadoA;
const regular = function (n){
    if (n % 2 == 0) {
        resultadoA = 'es par';
    } else {
        resultadoA = 'es impar';
    }
}
regular(15);
console.log(resultadoA);


/* Arrow Function ~ Función Flecha*/
var resultadoB;
const flecha = (m) => {
    if (m % 2 == 0) {
        resultadoB = 'es par';
    } else {
        resultadoB = 'es impar';
    }
}
flecha(12);
console.log(resultadoB);
