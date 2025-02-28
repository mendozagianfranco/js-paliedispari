// Chiedere all'utente di scegliere tra PARI e DISPARI
const userChoice = prompt('Scegli tra PARI e DISPARI');

// Chiedere un numero compreso tra 1 e 5
const userNum = parseInt(prompt('Inserire un numero tra 1 e 5'));

// Generare un numero random tra 1 e 5 per il computer
const computerNum = generateComputerNum(1, 5);

//Sommare numero utente e numero computer
const sum = sumTwoNum(computerNum, userNum);

// Confrontare la scelta del utente
if (userChoice === 'pari' && isEvenNum(sum)) {
    console.log(`Hai vinto il numero è ${sum}`);
} else {
    console.log(`Hai perso il numero è ${sum}`);
}

function generateComputerNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumTwoNum(num1, num2) {
    return num1 + num2;
}

// Controllare la somma se è PARI e DISPARI
function isEvenNum(num) {
    return num % 2 === 0;
}