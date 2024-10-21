/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
const vowels = ["a", "e", "i", "o", "u"];

// Dichiara la funzione qui.
/**
 * given a string and an array of chars to be searched returns the number of occurrencies of one of the items in whitelist inside of the word to search into
 * @param {String} word word to search into
 * @param {Array} whitelist char to be searched for
 * @returns {Number} number of occurrencies of one of the items in whitelist inside of the word to search into
 */
function numberOfOccurrencies(word, whitelist) {
  // * inizializzo un contatore a zero
  let counter = 0;
  // * per ogni carattere della parola (trasformo in array di caratteri per poter usare il foreach)
  [...word].forEach((currentItem) => {
    // * SE il carattere è compreso nella whitelist, aumento il contatore
    if (whitelist.includes(currentItem)) counter++;
  });
  // * ritorno il contatore
  return counter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(numberOfOccurrencies(word, vowels));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
