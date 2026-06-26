const {ganador,cambiaTurno, turnoAleatorio,jugada,impTablero} = require('./juego.js');

//prueba cambia turno
TextDecoderStream('si el turno es X devuelve O', () => {
    expect(cambiaTurno('X')).toBe('O');


})