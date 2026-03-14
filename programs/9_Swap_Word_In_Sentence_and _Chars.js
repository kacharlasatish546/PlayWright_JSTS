let sentence = "Ho!w are@ you?";


function swapWordInSentenceAndChars(sent) {
    let words = sent.split(" ");
    let result = "";
    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        let reverseWord = "";
        for (let j = word.length - 1; j >= 0; j--) {
            reverseWord = reverseWord + word[j];
        }
        result = result + reverseWord;
        if (i !== 0) {
            result += " ";
        }
    }
    console.log(result);
}

swapWordInSentenceAndChars(sentence);

function swapSentencesAndWords(sentence) {
    let result = sentence
        .split(" ")
        .reverse()
        .map(word => word.split("").reverse().join(""))
        .join(" ");
    console.log(result);
}

swapSentencesAndWords(sentence);

function swapWordInSentenceAndChars2(sent) {
    let words = sent.split(" ");
    let result = "";
    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        let reverseWord = "";
        let special = "";
        for (let j = word.length - 1; j >= 0; j--) {
            let ch = word[j];
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                reverseWord += ch;
            } else {
                special = ch + special;
            }
        }
        result = result + reverseWord + special + " ";
    }
    console.log(result);
}

swapWordInSentenceAndChars2(sentence);