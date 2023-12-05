// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//
//
//
//
// creo una costante alla quale collego un elemento in html per stampare i numeri successivamente
const numbers = document.getElementById("numeri");
// creo l'elemento del timer
const timer = document.getElementById("timer");
// creo l'emento del punteggio
const score = document.getElementById("punteggio");
// setto variabile di inzio conteggio
let seconds = 10;
// genero il mio array di numeri casuali
const randomNum = genArrayRandomNum(1, 100, 5);
console.log(randomNum);
const clock = setInterval(function () {
  if (seconds === 0) {
    numbers.innerHTML = "TEMPO SCADUTO!";
    timer.innerHTML = "";
    clearInterval(clock);
    setTimeout(function () {
      let punteggio = 0;
      let numIndovinati = [];
      for (let i = 0; i < randomNum.length; i++) {
        const guessedNum = parseInt(prompt("che numeri sono usciti?"));
        if (randomNum.includes(guessedNum)) {
          punteggio++;
          numIndovinati.push(guessedNum);
        }
        score.innerHTML = `Hai indovinato ${punteggio} numeri: ${numIndovinati}`;
      }
    }, 1000);
  } else {
    seconds--;
    timer.innerHTML = seconds;
    numbers.innerHTML = randomNum;
  }
}, 1000);
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
// FUNZIONI
// recupero la funzione per generare un numero random
function genRandomNumMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// recupero la funzione per generare un array composto da numeri random
function genArrayRandomNum(minNum, maxNum, lunghezzaArr) {
  const newArray = [];
  while (newArray.length < lunghezzaArr) {
    let newNumber = genRandomNumMinMax(minNum, maxNum);
    if (!newArray.includes(newNumber)) {
      newArray.push(newNumber);
    }
  }
  return newArray;
}
