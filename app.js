const mailPlay = document.getElementById('verifica-mail');

mailPlay.addEventListener('click', function() {

    const mailUser = prompt('Inserisci la tua mail');
    
    const mailDataBase = [
        'ciao@gmail.com',
        'prova21@gmail.com',
        'pippo45@libero.it',
        'prova2502@hotmail.com',
        'pluto@gmail.com'
    ];

    let find = false;
    
     for (let i = 0; i < mailDataBase.length; i++) {
    
        const element = mailDataBase[i];
    
        if (mailUser == element) {
            find = true;
        }
    
    }

    if ( find == true) {
        alert('Sei autorizzato all\'accesso!');
    } else {
        alert('I dati inseriti non sono corretti');
    }

})


const dadiPlay = document.getElementById('dadi');

dadiPlay.addEventListener('click', function() {

    const randomUser = Math.floor ( Math.random() * 6 + 1 );
    const numUser = document.getElementById('numero-utente');
    numUser.innerHTML = `il tuo numero generato è: ${randomUser}`;

    const randomComputer = Math.floor ( Math.random() * 6 + 1 );
    const numComputer = document.getElementById('numero-computer');
    numComputer.innerHTML = `il numero generato dal computer è: ${randomComputer}`;

    let result = document.getElementById('risultato');
    
    if (randomUser > randomComputer) {
        result.innerHTML = 'Hai vinto!';
    } else if (randomUser < randomComputer) {
        result.innerHTML = 'Hai perso';
    } else {
        result.innerHTML = 'Abbiamo pareggiato';
    }

})