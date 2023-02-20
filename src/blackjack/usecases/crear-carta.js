/**
 * Crea una carta en el tablero
 * @param {String} carta: Carta a crear
 * @param {Number} turno: Turno jugando
 * @param {HTMLElement} divCartasJugadores: Elemento HTML donde se mostrarán las cartas
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
  if (!divCartasJugadores) {
    divCartasJugadores = document.querySelectorAll('.divCartas');
  }
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugadores[turno].append(imgCarta);
};
