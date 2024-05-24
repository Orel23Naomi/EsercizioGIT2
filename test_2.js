/**
  Crea un nuovo branch e fai i seguenti esercizi

  * Ciclo For:
  Scrivi un esempio di un ciclo for che stampa i numeri da 1 a 5.

  * Ciclo While:
  Qual è la differenza tra un ciclo for e un ciclo while?
  Scrivi un esempio di un ciclo while che stampa i numeri da 1 a 5.

  * Istruzione Condizionale:
  Spiega la differenza tra l'istruzione "if" e l'istruzione "else if" in JavaScript.
  Scrivi un esempio di un'istruzione condizionale che verifica se un numero è pari o dispari.

  * Ciclo For...of:
  Qual è lo scopo del ciclo for...of in JavaScript?
  Scrivi un esempio di un ciclo for...of che itera su un array di nomi e li stampa.

  * Esercizio: Scrivi una funzione in JavaScript chiamata "printEvenNumbers" che accetta un numero intero positivo come argomento e stampa tutti i numeri pari da 1 fino al numero specificato. Utilizza un ciclo for per risolvere questo problema.

**/







for (count 0; count <=5; count++){
     console.log( count + "count*1 = " + count *1);
}  

/**La differenza fra un ciclo while e for è la seguente:
il ciclo while si compone di due elementi: 1 condizione e  1 blocco di istruzioni, si ripeterà finchè non raggiungerà la condizione scritta. Se la condizione parte falsa il ciclo non inizierà.
il ciclo for è utile quando già sappiamo quante volte un' istruzione deve essere eseguita. E' composto dall'inizializzazione, la condizione e l'incremento.
**/

luna= 0; 
while (luna<=5) {
  console.log (luna);
}

/** La differenza fra l'istruzione if e if else è la seguente:
  If esprime una condizione, se la condizione è vera si manda in esecuzione le istruzioni, altrimenti si ferma.
  If else esprime tre o più condizioni, se la condizione è vera si manda in esecuzione le istruzioni del primo blocco, nel caso fosse falsa si salta e si manda in esecuzione il prossimo blocco con else, 
  se anche quel blocco dovesse risultare falso si passa al blocco successivo con if else.
 **/

var car=2;
  if (car == 1) {
    console.log( "il numero è dispari!");
  }else {
    console.log( "il numero è pari!");
  }


/** Il ciclo for... of serve a scrivere meno codice quando lavoriamo con le array ed è nato con ECMAScript 6( io non so se sono scema io ma ho cercato come una pazza la speigazione del ciclo for in e for of nel corso
  ma non l'ho trovato, sono andata a cercare  su google la sua spiegazione).
 **/
 
  const numeri= [1, 2, 3, 4, 5];
   for( const numero of numeri) {
        console.log(numero);
   }




function printEvenNumbers() {
    for (i=0; i<=15; i++){

        console.log(i);
    }
}
  printEvenNumbers();