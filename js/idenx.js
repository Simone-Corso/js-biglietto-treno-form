//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.1976 € al km)
//va applicato uno sconto del 17.65% per i minorenni
//va applicato uno sconto del 53.27% per gli over 65.
//MILESTONE 1:
 //Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
//La risposta finale (o output) sarà anch’essa da scrivere in console.

//Quanti km vuoi fare e quanti anni hai?

/*

STEPS:

1. eseguire del codice solo quando l'utente clicca - console.log() e creazione di un evento con addEventListener()
2.andare a prendere il valore che l'utente ha inserito negli input - getElementById e .value
3. i valori inseriti dall'utente negli input devono essere salvati in delle variabili

*/

const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', function(){

    const prezzoBiglietto = km * 0.1976;
let prezzoFinale;

// per verificare che funzioni questo operazionde del biglietto farò una console.log

console.log('Il prezzo del biglietto é :' + prezzoBiglietto);

//applichiamo uno sconto del 17.65% per i minorenni

if (eta < 18){
    console.log("L'utente è minorenne");
    const sconto = prezzoBiglietto * 17.65 / 100
    console.log("Lo sconto del biglietto è :" + sconto);
    prezzoFinale = prezzoBiglietto - sconto
    console.log("Il costo del biglietto è :" + prezzoFinale);
}
//applichiamo uno sconto del 43.27% per gli over65

else if (eta > 65){
    console.log("L'utente è magiorenne");
    const sconto = prezzoBiglietto * 53.27 / 100
    console.log("Lo sconto del biglietto è :" + sconto);
    prezzoFinale = prezzoBiglietto - sconto
    console.log("Il costo del biglietto è :" + prezzoFinale);
}


    let km = document.getElementById('km').value;
    console.log('km: ' + km);
    let eta = document.getElementById('eta').value;
    console.log('eta: ' + eta);
    console.log('inizio della funzione');
    alert("i dati inseriti dall'utente");
    console.log('fine della funzione');
});

