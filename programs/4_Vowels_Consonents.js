let vowels = 0;
let consonants = 0;

function vowelsandConsonentsChecker1(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels++;
        } else if(char !== ' '){
            consonants++;
        }
    }
    console.log("Vowels: " + vowels);
    console.log("Consonants: " + consonants);
}

vowelsandConsonentsChecker1("Hello World");

function vowelsAndConsonantsChecker2(str) {
    let vowelRegex = /[aeiou]/gi;
    let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/gi;

    let vowelMatches = str.match(vowelRegex);
    let consonantMatches = str.match(consonantRegex);

    let vowels = vowelMatches ? vowelMatches.length : 0;
    let consonants = consonantMatches ? consonantMatches.length : 0;

    console.log("Vowels:", vowels);
    console.log("Consonants:", consonants);
}

vowelsAndConsonantsChecker2("Hello World");