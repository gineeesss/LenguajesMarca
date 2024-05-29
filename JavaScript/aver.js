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

function changePlayerColor(){
    const botones = document.querySelectorAll('#botones button');
    for (let i = 0; i < botones.length; i++){
        if(currPlayer == jugadorAmarillo){
            botones[i].className = "btn btn-success";
        }
        else{
            botones[i].className = "btn btn-danger";
        }
    }
}
