import {
  crearDeck,
  pedirCarta,
  valorCarta,
  acumularPuntos,
  turnoComputadora,
  crearCarta,
} from './usecases';
import _ from 'underscore';

/**
 * 2C = 2 Clubs (Treboles)
 * 2D = 2 Diamonds (Diamantes)
 * 2H = 2 Hearts (Corazones)
 * 2S = 2 Swords (Espadas)
 */

const miModulo = (() => {
  'use strict';
  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  //Referencias del html
  const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo'),
    puntosHTML = document.querySelectorAll('small'),
    divCartasJugadores = document.querySelectorAll('.divCartas');

  //Esta función inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];
    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ''));
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
  };

  //Eventos
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
    crearCarta(carta, 0, divCartasJugadores);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador, deck, puntosJugadores);
    } else if (puntosJugador === 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador, deck, puntosJugadores); //duda
    }
  });

  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], deck, puntosJugadores);
  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
