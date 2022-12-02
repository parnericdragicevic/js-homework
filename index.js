//01 - Spremi svoje godine (dob, broj rođendana) u varijablu. izračunaj koliko imaš godina u psećim godinama, pa rezultat ispiši na konzolu.
var myAge = 37
console.log(myAge / 7);

//02 - Spremi svoje ime i prezime u zasebne varijable, konkateniraj te varijable u treću varijablu, te ispiši vrijednost treće varijable na konzolu

var myName = "Petra"
var mySurname = "Arnerić Dragičević"
var myFullName = `${myName} ${mySurname}`
console.log(myFullName);

//03 Koristeći varijable, napiši program koji uzima dva cjelobrojna broja između 1 i 20, te na konzolu ispisuje njihov ostatak pri dijeljenju

var firstNumber = 15
var secondNumber = 4
console.log(firstNumber % secondNumber);


//04 Kreiraj varijablu koja prati broj polaznika Brainlab akademije, početna vrijednost je 22. Nakon nekog vremena 2 nova polaznika su se upisal

var start = 22
console.log(start);
var start = start + 2
console.log(start);
var start = start - 3
console.log(start);
var start = start + 5
console.log(start);

/* 05 - Pokušaj pogoditi što će se ispisati na konzoli
console.log("3"+3); - 33 (string)
console.log(5+12); - 17 (number)
console.log(5+"4"); 54 (string)
console.log("My points: " + 4 +9) - My points 49 (string)
console.log(2+2); - 4 (number)
console.log ("11" + "14") - 1114 - (string)
*/


//06 Svoje puno ime i prezime ispiši na konzoli, pa ga pretvori u velika slova i ispiši na konzoli, pa ponovo pretvori u mala slova i ispiši na konzoli

console.log(myFullName.toUpperCase());
console.log(myFullName.toLowerCase());


//07 Nekom od naredbi s predavanja provjeri koliko tvoje ime i prezime ima znakova

console.log(myFullName.length);

