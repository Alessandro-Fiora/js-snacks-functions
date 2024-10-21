/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const searchedLetter = "A";
let newArray = [];

// Dichiara la funzione qui.
const arrowFirstLetter = (array, searchedLetter) => {
  const arrayFirstLetter = [];
  array.forEach((currentItem) => {
    if (currentItem.charAt(0) === searchedLetter)
      arrayFirstLetter.push(currentItem);
  });
  return arrayFirstLetter;
};
// Invoca la funzione qui e stampa il risultato in console
newArray = arrowFirstLetter(names, searchedLetter);
console.log(newArray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
