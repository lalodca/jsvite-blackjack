/**
 * Esta función retorna el valor de la carta obtenida
 * @param {String} carta
 * @returns {Number} retorna el valor de la carta
 */
//Sirve para obtener el valor de cada carta pedida
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
