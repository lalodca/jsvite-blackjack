import { valorCarta } from './';
//Turno 0 = Jugador 1 y el último será la computadora
/**
 * Acumula los puntos del jugador en turno
 * @param {String} carta: Carta a acumular
 * @param {Number} turno: Turno jugando
 * @param {Array<Number>} puntosJugadores: Puntos acumulados de los jugadores
 * @param {HTMLElement} puntosHTML: Elemento HTML para mostrar los puntos
 * @returns Retorna los puntos acumulados
 */
export const acumularPuntos = (
  carta,
  turno,
  puntosJugadores = [],
  puntosHTML
) => {
  if (!puntosHTML) {
    puntosHTML = document.querySelectorAll('small');
  }
  console.log(carta, turno, puntosJugadores, puntosHTML);
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];

  return puntosJugadores[turno];
};
