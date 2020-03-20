// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


// chiedi un numero 5 volte

var numOne = parseInt(prompt ("Please enter a number"));
var numTwo = parseInt(prompt ("Please enter another number"));
var numThree = parseInt(prompt ("And another one"));
var numFour = parseInt(prompt ("And again"));
var numFive = parseInt(prompt ("And a last one"));

// somma i numeri

var totalSum = numOne + numTwo + numThree + numFour + numFive;

// stampa la somma

document.getElementById('sum').innerHTML= "And the result is:   " + totalSum;
