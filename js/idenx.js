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

const eta = parseInt( prompt ('Quanti Anni Hai?'));
const km = parseInt( prompt ('Quanti Km Vuoi Fare? Un Km Corrisponde a 0.1976 €'));

// inseriamo un input prezzoBiglietto * 0.1976€ al Km

const prezzoBiglietto = km * 0.1976;
let prezzoFinale;

// per verificare che funzioni questo operazionde del biglietto farò una console.log

console.log('Il prezzo del biglietto é :' + prezzoBiglietto);

//applichiamo uno sconto del 17.65% per i minorenni

if (eta < 18){
    console.log("L'utente è minorenne");
    const sconto = prezzoBiglietto * 17.65 / 100
    console.log("Lo sconto del biglietto è :" + sconto);
}




//applichiamo uno sconto del 43.27% per gli over65