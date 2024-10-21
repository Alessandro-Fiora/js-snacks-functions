/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";
const currentdate = new Date();
currentdate.getHours();

// Dichiara la funzione qui.
/**
 * Given a name and a date object, greets the name accordingly to the time of the day
 * @param {String} name the name to greet
 * @param {*} currentdate the date object
 */
const hiDate = (name, currentdate) => {
  if (currentdate.getHours() < 13) alert(`Buongiorno ${name}`);
  else if (currentdate.getHours() > 13 && currentdate.getHours() < 17)
    alert(`Buon Pomeriggio ${name}`);
  else alert(`Buonasera ${name}`);
};
// Invoca la funzione qui e stampa il risultato in console
hiDate(name, currentdate);
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
