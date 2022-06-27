let count = 2;
for (let i = 1; i<=10; i++) {
    console.log(Math.pow(count,i));
}

const exponentiation = function(exponent) {
    let base = 2;
    for (let i = 1; i<=exponent; i++) {
        console.log(Math.pow(base,i));
    }
}
exponentiation(2);

let smile = ":)";
let m = [];
for (let i = 0; i < 5; i++) {
    m[i] = smile; 
    console.log(m);
}

const printSmile = function(stroka, numberOfRows) {
    let m = [];
    for (let i = 0; i < numberOfRows; i++) {
        m[i] = stroka; 
        console.log(m);
    }
}
printSmile(":)", 5);


const getWordStructure = function(word){
let Str_word = String (word).toLowerCase();
let countVowels = 0;
let countConsonants = 0;
let vowels = ['a', 'e', 'i', 'o', 'y', 'u']
let consonants = ['b','c','d','f','g','h','j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
    for (let i = 0; i < Str_word.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (Str_word.charAt(i) == vowels[j]) {
                countVowels++;
            }
        } 
        for (let k = 0; k < consonants.length; k++) {
            if (Str_word.charAt(i) == consonants[k]) {
                countConsonants++;
            }
        }
    }
console.log("Слово", word, "состоит из", countVowels, "гласных и", countConsonants, "согласных букв");
}
getWordStructure("case");
getWordStructure("Case");
getWordStructure("Check-list");

const isPalindrom = function(word) {
        let wordReverse = String(word).split("").reverse("").join("")
        if (String(word).toLowerCase() == wordReverse.toLowerCase()) {
            console.log(word, "It's a palindrom");
        } else {
            console.log(word, "It's not a palindrom");
        }
}
isPalindrom("Abba");