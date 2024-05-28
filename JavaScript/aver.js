var jugadorRojo = "R";
var jugadorAmarillo = "A";
var currPlayer;


function inicio(){
    if (Math.random() < 0.5){
        currPlayer = jugadorRojo;
    }  else {
        currPlayer = jugadorAmarillo;
    }
}
setInterval(1000,inicio);