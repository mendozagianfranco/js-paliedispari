# Pali e Dispari

Questo progetto contiene due esercizi in **JavaScript**: uno sul controllo delle **parole palindrome** e uno sul classico gioco **Pari e Dispari**.  
Gli esercizi aiutano a consolidare le basi di **funzioni, cicli, condizioni e input dell’utente**.

---

## Esercizio 1: Palindroma

### Obiettivo
Verificare se una parola inserita dall’utente è **palindroma** (si legge uguale da sinistra a destra e da destra a sinistra).

### Descrizione
- L’utente inserisce una parola.  
- Una funzione verifica se la parola è palindroma.  
- Stampa un messaggio che indica se la parola è o non è palindroma.

### Soluzione

#### INPUT
Parola inserita dall’utente.

#### PROCEDIMENTO
1. Chiedere all’utente di inserire una parola.  
2. Invertire la parola.  
3. Confrontare la parola invertita con quella originale.  

#### OUTPUT
Stampare:
- Se la parola è palindroma → _"La parola è palindroma"_  
- Altrimenti → _"La parola non è palindroma"_

#### Pseudocodice
Chiedere all’utente di inserire una parola\
Invertire la parola\
SE la parola invertita è uguale alla parola originale\
Stampare "La parola è palindroma"\
ALTRIMENTI\
Stampare "La parola non è palindroma"

---

## Esercizio 2: Pari e Dispari

### Obiettivo
Simulare il gioco Pari e Dispari tra utente e computer.

### Descrizione
- L’utente sceglie tra **pari** o **dispari** e inserisce un numero da 1 a 5.  
- Il computer genera un numero casuale da 1 a 5 tramite una funzione.  
- Sommiamo i due numeri e determiniamo se la somma è pari o dispari.  
- Stampiamo chi ha vinto.

### Soluzione

#### INPUT
- Scelta dell’utente: pari o dispari.  
- Numero dell’utente: da 1 a 5.

#### PROCEDIMENTO
1. Generare un numero casuale tra 1 e 5 per il computer.  
2. Sommare il numero dell’utente e quello del computer.  
3. Controllare se la somma è pari o dispari.  
4. Confrontare con la scelta dell’utente.

#### OUTPUT
Stampare l’esito:
- Se la scelta dell’utente corrisponde al risultato → _"Hai vinto!"_  
- Altrimenti → _"Hai perso!"_

#### Pseudocodice
Chiedere all’utente di scegliere tra PARI o DISPARI\
Chiedere all’utente di inserire un numero tra 1 e 5\
Generare un numero casuale tra 1 e 5 per il computer\
Sommare i due numeri\
SE somma è PARI\
Risultato = PARI\
ALTRIMENTI\
Risultato = DISPARI\
SE scelta dell’utente corrisponde al risultato\
Stampare "Hai vinto!"\
ALTRIMENTI\
Stampare "Hai perso!"

---

## Tecnologie utilizzate
- **HTML5**  
- **JavaScript (vanilla)**  
