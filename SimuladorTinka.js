//DECLARACIÓN DE VARIABLES CONSTANTES (ENLACES CON LOS ELEMENTOS HTML) Y APLICACION DE ESCUCHADORES A LOS BOTONES
const buttonPlay = document.getElementById('play-button');
const buttonPlayAgain = document.getElementById('play-again-button');
const gBoxes = document.querySelectorAll('.boxes-group');
buttonPlay.addEventListener('click', play);
buttonPlayAgain.addEventListener('click', playAgain);

//DECLARACIÓN DE VARIABLES GLOBALES LET
let numberTurnSecuence;
let numberDraw = [];
let soundNumber = new Audio("./sonidos/soundNumber.mp3");

//DECLARACIÓN DE CONDICIONES INICIALES DE LA APLICACIÓN
buttonPlayAgain.style.display = 'none';

for (let i = 1; i <= 48; i++) {
    let numberWithZero = i.toString().padStart(2, '0');
    numberDraw.push(numberWithZero);
}

//FUNCIÓN BASE DE LA ALEATORIEDAD
function random (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}



//FUNCIÓN QUE SE ACTIVA CON EL BOTÓN "JUGAR", OCULTA AL MISMO BOTÓN, HACE APARECER AL BOTÓN "VOLVER A JUGAR" Y EJECUTA LA FUNCION EXECUTION.
function play(){
    buttonPlay.style.display = 'none';
    buttonPlayAgain.style.display = 'flex';
    execution();
}


//FUNCIÓN QUE SE ACTIVA AL PULSAR EL BOTÓN "VOLVER A JUGAR", RESETEA EL ARRAY NUMBERDRAW, ESCRIBE -- EN CADA CAJA, Y POSTERIORMENTE EJECUTA LA FUNCION EXECUTION.
function playAgain(){
    numberDraw = [];

    for (let i = 1; i <= 48; i++) {
        let numberWithZero = i.toString().padStart(2, '0');
        numberDraw.push(numberWithZero);}
    gBoxes.forEach(box => {
        box.innerHTML = '--';});
        execution();
    }


//ESCRIBE UN NUMERO ALEATORIO EN CADA CAJA, INCORPORANDO RETRASO EN LA EJECUCIÓN DE CADA UNO.
function execution(){
    gBoxes.forEach(function (box, index){
      setTimeout(function() {
        randomNumber(box);
        soundNumber.play();}, 
        index * 2000);
     });
};


//FUNCION QUE SELECCIONA DE FORMA ALEATORIO EL NUMERO DEL ARRAY NUMBERDRAW, LO USA Y POSTERIORMENTE CREA UN ARRAY NUEVO ELIMINANDO EL ELEMENTO USADO.
function randomNumber(secuencia){
    let numberTurn = random(0, numberDraw.length -1);
    numberTurnSecuence = numberDraw[numberTurn];
    secuencia.innerHTML = numberTurnSecuence;
    
    numberDraw = numberDraw.filter(function(numero) {
    return numero !== numberTurnSecuence;
    });
}
