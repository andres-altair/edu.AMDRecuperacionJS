
var arrayTotal = [];
var arrayPalabra = [];
var arrayAsterisco = [];
var arrayLetraFallada=[];
var intentos = 0;
var tiempo = 0;
var inicio;



function mostrarTotal() {
    let verTotal = document.getElementById("historial");
    verTotal.innerHTML = "";

    arrayTotal.forEach((total) => {
        verTotal.innerHTML += `Palabra: ${total[0].join(" ")} Tiempo: ${total[1]} Intentos: ${total[2]}</td> </tr>`;
    });
}



function mostrar() {
    let ver = document.getElementById("verPalabra");
    ver.innerHTML = arrayAsterisco.join(" ");
}



function palabra() {
    let palabra = prompt("Escribe la palabra");
    arrayPalabra = palabra.split("");
    arrayAsterisco = Array(arrayPalabra.length).fill("*");
    mostrar();
}



function pedirLetra() {
    inicio = new Date();
    let letra;
    let acertado;
    let terminar = false;
    let verIntento = document.getElementById("intentos");
    let verFallos= document.getElementById("verFallos");
	verIntento.innerHTML = intentos;

    do {
        letra = prompt("Escribe una letra").toLowerCase();
    } while (!isNaN(letra) && !letra);
    for (let i = 0; i < arrayAsterisco.length; i++) {
        if (arrayPalabra[i] === letra) {
            arrayAsterisco[i] = letra;
            acertado = true;
        }
    }
    if (!acertado) {
        intentos++;
        arrayLetraFallada.push(letra);
    }
    verIntento.innerHTML = intentos;
    verFallos.innerHTML= arrayLetraFallada.join(",");
    mostrar();
    if (intentos <=1 && arrayAsterisco.join("") === arrayPalabra.join("")) {
        alert("Magnifico!");
        let fin = new Date();
        tiempo = ((fin - inicio) / (1000 * 60)).toFixed(2);
        terminar = true;
    } else if (intentos <= 4 && intentos >= 2 && arrayAsterisco.join("") === arrayPalabra.join("")) {
        alert("¡Bien!");
        let fin = new Date();
        tiempo = ((fin - inicio) / (1000 * 60)).toFixed(2);
        terminar = true;
    }else if (intentos <= 4 && intentos > 5 && arrayAsterisco.join("") === arrayPalabra.join("")) {
        alert("Pòr poco");
        let fin = new Date();
        tiempo = ((fin - inicio) / (1000 * 60)).toFixed(2);
        terminar = true;
    } else if (intentos > 5) {
        alert("Perdiste");
        let fin = new Date();
        tiempo = ((fin - inicio) / (1000 * 60)).toFixed(2);
        terminar = true;

    if (!terminar) {
        arrayTotal.push([arrayAsterisco, tiempo, intentos]); 
        inicio;
        mostrarTotal();
        arrayPalabra = [];
        arrayLetraFallada=[];
        arrayAsterisco = [];
        intentos = 0;
        tiempo = 0;
    }
}
}
function tiempoVer(){
	let ahora= new Date();
	let tiempoPasado = ahora-inicio/(1000*60);
	let verTiempo = document.getElementById("verTiempo");
	verTiempo.innerHTML=tiempoPasado;
}


console.log(arrayPalabra.join(""));