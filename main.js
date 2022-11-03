// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// array vuoto
let array = [];
console.log(array)
// variabile singolo numero random
let numeroRandom;
// variabile per scrivere numeri array nell'html
let numeriNellHtml = document.getElementById('numeriArray');

// funzione per generare numeri random
function get5Random(max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
get5Random(100,1)

// ciclo per immettere 5 num random nell'array e stamparli nell'html
for( x=0; x<5; x++){
    numeroRandom = get5Random(100,1);
    array.push(numeroRandom);
    numeriNellHtml.innerHTML += `${numeroRandom}`;
}
