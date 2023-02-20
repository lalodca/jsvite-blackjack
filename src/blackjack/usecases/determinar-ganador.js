/**
 * Determina el ganador
 * @param {Array<Number>} puntosJugadores: Puntos acumulados de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores;
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Empate!');
    } else if (puntosMinimos > 21) {
      alert('PC Gana');
    } else if (puntosComputadora > 21) {
      alert('Jugador Gana');
    } else {
      alert('PC Gana');
    }
  }, 1000);
};
