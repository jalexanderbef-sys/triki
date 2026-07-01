let turno = turnoAleatorio()
let juegoTerminado = false


if(typeof document !== "undefined"){
    impTablero()
}
function turnoAleatorio(){
    let turno = Math.floor(Math.random() * (2 - 1 + 1) + 1)

    if(turno == 1){
        return 'X'
    }else{
        return 'O'
    }
}

function jugada(id_Celda){

    if(juegoTerminado){
        return
    }

    let celda = document.getElementById(id_Celda)
    if(celda.innerText == ''){
        celda.innerText = turno

        if(turno == 'X'){
            celda.style.color = "red"
            jugador1.push(Number(id_Celda))
        }else{
            celda.style.color = "blue"
            jugador2.push(Number(id_Celda))
        }
        ganador()
        if(!juegoTerminado){
            turno = cambiaTurno(turno)
        }
    }}
function impTablero(){
    let tablero = document.getElementById('contenedor')

    for(let i = 1; i <= 9; i++){
        tablero.innerHTML += `
            <div id="${i}" class="celda" onclick="jugada('${i}')"></div>
        `
    }
}

function cambiaTurno(turno){
    if(turno == 'X'){
        return 'O'
    }else{
        return 'X'
    }
}

let jugador1 = []
let jugador2 = []
function ganador(){
    const jugadasGanadoras = [
                            [1,2,3],
                            [4,5,6],
                            [7,8,9],
                            [1,4,7],
                            [2,5,8],
                            [3,6,9],
                            [1,5,9],
                            [3,5,7]
                            ]

    for(let jugada of jugadasGanadoras){
        if(
            jugador1.includes(jugada[0]) &&
            jugador1.includes(jugada[1]) &&
            jugador1.includes(jugada[2])
        ){
            juegoTerminado = true
            alert("¡Ganó el jugador X!")
            return
        }
        if(
            jugador2.includes(jugada[0]) &&
            jugador2.includes(jugada[1]) &&
            jugador2.includes(jugada[2])
        ){
            juegoTerminado = true
            alert("¡Ganó el jugador O!")
            return
        }
    }
    if((jugador1.length + jugador2.length) == 9){
        juegoTerminado = true
        alert("¡Empate!")
    }}



module.exports = {
    cambiaTurno,
    ganador
}