const word = 'HEllO, JavaScript';

function countVowels(str) {
    const matches = str.match(/[aeiouy]/gi);
    return matches ? matches.length : 0;
}

const vowelCount = countVowels(word);
console.log(vowelCount);



