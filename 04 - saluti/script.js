/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

// Dichiara la funzione qui.
const hi = (name) => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
alert(hi(name));

//Risultato atteso se si passa 'Mario': // ciao Mario
