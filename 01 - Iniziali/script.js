/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

/**
 * Given an array of strings, returns an array of the first letters of the elements of the original array
 * @param {Array} originalArray the complete array
 * @returns {Array} an array of the first letters of the elements of the original array
 */
function firstLetter(originalArray) {
  // * dichiaro nuovo array vuoto
  const fistLetterArray = [];
  // * per ogni elemento dell'array originale pusho la prima lettera dell'elemento corrente nel nuovo array
  originalArray.forEach((currentWord) =>
    fistLetterArray.push(currentWord.charAt(0))
  );
  return fistLetterArray;
}

// Invoca la funzione qui e stampa il risultato in console

const newArray = firstLetter(names);
console.log(newArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
