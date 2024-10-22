/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

// Variabile con nome da salutare
const name = "Mario";

// Dichiara la funzione qui.
/**
 * Given a name and a date object, greets the name accordingly to the time of the day
 * @param {String} name the name to greet
 * @param {*} currentdate the date object
 */
const hiDate = (name) => {
  let greet;
  const currentdate = new Date();
  const currentHour = currentdate.getHours();
  if (currentHour <= 13) greet = `Buongiorno ${name}`;
  else if (currentHour > 13 && currentHour <= 17)
    greet = `Buon Pomeriggio ${name}`;
  else greet = `Buonasera ${name}`;

  return greet;
};
// Invoca la funzione qui e stampa il risultato in console
alert(hiDate(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
