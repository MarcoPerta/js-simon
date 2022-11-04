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
// variabile per scrivere risultato array nell'html
let risultato = document.getElementById('risultato');

// funzione per generare numeri random
function get5Random(max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
get5Random(100,1)

// ciclo per immettere 5 num random nell'array e stamparli nell'html
for( let x=0; x<5; x++){
    numeroRandom = get5Random(100,1);
    array.push(numeroRandom);
    numeriNellHtml.innerHTML += `${numeroRandom}  `;
}

// variabile per far scomparire i numeri dopo 5s
let scomparire = setTimeout (scomparireNumeroRandom, 5000);

// funzione all'interno della variabile JS Timing che ha lo scopo di far scomparire i numeri nell HTML
function scomparireNumeroRandom(){
    document.getElementById("numeriArray").style.display = "none";
}

// variabile per chiedere prompt dopo scomparsa numeri
let rispostaUtente = setTimeout (chiediNumeri, 6000);

// funzione che chiede prompt per far inserire numeri all'utente 5 volte

var arrayUtente = [];
console.log(arrayUtente)

function chiediNumeri(){

    for(let y=0 ; y<5 ; y++){
        var richiesta = parseInt(prompt('Quali erano i numeri presenti nella pagina?'));

        if (array.includes(arrayUtente)){
          arrayUtente.push(richiesta);
        }
    }
    document.getElementById("numeriArray").style.display = "block";
    risultato.innerHTML = `il tuo punteggio è di ${arrayUtente.length}`;
    console.log('i numeri giusti sono :' , arrayUtente)
}




