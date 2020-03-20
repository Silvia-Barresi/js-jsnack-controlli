// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// chiedi prima parola
var firstWord = prompt("Scrivi una parola");

// chiedi seconda parola
var secondWord = prompt("Scrivi un'altra parola");

// quale parola è più lunga

if (firstWord.length > secondWord.length){
  h1= firstWord;
} else {
  h1= secondWord;
}

if (firstWord.length < secondWord.length){
  h2= firstWord;
} else {
  h2= secondWord;
}

// stampa prima parola più corta, poi più lunga

document.getElementById('longone').innerHTML= h1;
document.getElementById('shortone').innerHTML= h2;
