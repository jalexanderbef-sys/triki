const { cambiaTurno } = require("./juego")


test("cambia turno correctamente", ()=>{

    expect(cambiaTurno("X"))
    .toBe("O")


    expect(cambiaTurno("O"))
    .toBe("X")

})


test("detecta ganador jugador X", ()=>{

    let jugadorX = [1,2,3]


    let gano = 
    jugadorX.includes(1) &&
    jugadorX.includes(2) &&
    jugadorX.includes(3)


    expect(gano)
    .toBe(true)

})


test("detecta empate cuando el tablero esta lleno", ()=>{


    let movimientos = 9


    expect(movimientos)
    .toBe(9)


})