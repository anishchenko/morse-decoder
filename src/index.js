const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    // ----------- variant 2 ---------------------
    const exprArr = Array.from(expr);
    
    const digitSymbolsArr = breakExprToSymbols(exprArr);
    const morseSymbolsArr = decodeFromDigitsToMorse(digitSymbolsArr);
    const humanReadableStr = decodedFromMorseToHuman(morseSymbolsArr);

    function decodedFromMorseToHuman(arr) {
        let finalStr = '';
        
        arr.forEach(element => {
            let morseSymbol = '';

            element.forEach(item => morseSymbol += item);

            (morseSymbol === ' ') ? finalStr += ' ' : finalStr += MORSE_TABLE[morseSymbol];
        })
       
        return finalStr;
    }

    function decodeFromDigitsToMorse (arr) {
        const symbols = [];

        arr.forEach(element => {
            const symbl = [];

            for(let i = 0; i < element.length; i++) {
                if(element[i] === '1') {
                    if(element[i + 1] === '0') {
                        symbl.push('.');
                        i++;
                    }else if(element[i + 1] === '1') {
                        symbl.push('-');
                        i++;
                    }
                }else if(element[i] === '*') {
                    symbl.push(' ');
                    i += element.length;
                }
            }
            symbols.push(symbl);
        })
     
        return symbols;
    }
    
    function breakExprToSymbols(Arr) {
        const symbl = [];
        const symbols = [];

        Arr.forEach(element => {
            symbl.push(element);
            if(symbl.length === 10) {
                symbols.push(symbl.splice(0, 10));
            }
        });

        return symbols;
    }

    return humanReadableStr;

    // --------- variant 1 -------------------------------
    /*
    const symbols = expr.split('');

    let words = [];

    while(symbols.length !== 0) {
        let word = symbols.splice(0, 10);
        words.push(word.slice(0, 10));
        word.splice(0, 10);
    }

    function transformationToMorseWords(words) {
        let morseWords = [];
        words.forEach(el => {
            const morseWord = [];
            for(let i = 0; i < el.length; i++) {
                if (el[i] === '1' && el[i + 1] === '0') {
                    morseWord.push('.');
                }else if(el[i] === '1' && el[i + 1] === '1') {
                    morseWord.push('-');
                    i++;
                }else if(el[i] === '*') {
                    morseWord.push(' ');
                    i = el.length;
                }
            }
            morseWords.push(morseWord.slice());
        });
        return morseWords;
    }
    const morseWords = transformationToMorseWords(words);

    function decodedMorse(morse) {
        let str = '';
        morse.forEach(item => {
            let morseSymbols = '';
            item.forEach(sym => {
                morseSymbols += sym;
            })
            str += (MORSE_TABLE[morseSymbols] === undefined) ? ' ' : MORSE_TABLE[morseSymbols];

        })
        return str;
    }
    const finalStr = decodedMorse(morseWords);
    // console.log(`final string - ${finalStr}`);

    return finalStr;
    */
}

module.exports = {
    decode
}