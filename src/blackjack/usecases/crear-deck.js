import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
//Esta función crea y retorna una nueva baraja
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (const tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }
  for (const tipo of tiposDeCarta) {
    for (const especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }

  return _.shuffle(deck);
};
