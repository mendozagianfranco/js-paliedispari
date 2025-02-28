// Chiedere all'utente di inserire una parola
let userWord = prompt('Inserire una parola');

// Stampare risultato in base al controllo
if (isPalindroma(userWord)) {
    console.log(`La parola ${userWord} è palindroma`);
} else {
    console.log(`La parola ${userWord} non è palindroma`);

}

// Prendere la parola dell'utente e invertirla
function isPalindroma(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        let currentCharcter = word[i];
        reverseWord += currentCharcter;
    }
    return reverseWord === word;
}