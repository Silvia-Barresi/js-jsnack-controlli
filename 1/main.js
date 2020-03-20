// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


// Chiedi primo numero
var primoNum = prompt ("Scrivi un numero");


// Chiedi secondo numero
var secondoNum = prompt ("Scrivi un altro numero");



// quale numero è più grande

if (primoNum > secondoNum){
  msg= "Il numero più grande è:" + primoNum;
} else{
  msg= "Il numero più grande è:" + secondoNum;
}


// output

document.getElementById('numero').innerHTML = msg;
