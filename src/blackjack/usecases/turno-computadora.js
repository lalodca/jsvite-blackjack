import { pedirCarta, acumularPuntos, determinarGanador, crearCarta } from './';

//Turno de la computadora
/**
 * Turno de la computadora
 * @param {Number} puntosMinimos: puntos mínimos necesarios que la computadora necesita para ganar
 * @param {Array<String>} deck: Baraja
 * @param {Array<Number>} puntosJugadores: puntos acumulados de los jugadores
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores) => {
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(
      carta,
      puntosJugadores.length - 1,
      puntosJugadores
    );
    crearCarta(carta, puntosJugadores.length - 1);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  determinarGanador(puntosJugadores);
};
