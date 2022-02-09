// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi ha il numero più alto.  (e se pari?)

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?


const mailUser = prompt('Inserisci la tua mail');

const mailDataBase = [
    'ciao@gmail.com',
    'prova21@gmail.com',
    'pippo45@libero.it',
    'prova2502@hotmail.com',
    'pluto@gmail.com'
];

 for (let i = 0; i < mailDataBase.length; i++) {

    const element = mailDataBase[i];

    if (mailUser == element) {
        alert('Sei autorizzato all\'accesso!');
    } 

}

const randomUser = Math.floor ( Math.random() * 6 + 1 );
console.log(randomUser);

const randomComputer = Math.floor ( Math.random() * 6 + 1 );
console.log(randomComputer);

if (randomUser > randomComputer) {
    alert('Hai vinto!');
} else if (randomUser < randomComputer) {
    alert('Hai perso');
} else {
    alert('Abbiamo pareggiato');
}