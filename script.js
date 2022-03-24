const consoants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'w', 'z', 'ç']
const areaTextWrite = document.querySelector('textarea');
let caractersText = document.querySelector('#txt_carac');
let consoantsText = document.querySelector('#txt_con');
let vowelsText = document.querySelector('#txt_vow');
let wordsText = document.querySelector('#txt_word');
const vowel = ['a', 'e', 'i', 'o', 'u'];

class Text {

    constructor(caractersText, wordsText, vowelsText, consoantsText) {
        this.caracterTextElement = caractersText;
        this.consoantTextElement = consoantsText;
        this.vowelTextElement = vowelsText;
        this.wordTextElement = wordsText;
    }

    analise(text) {
        this.caracterResult = text.split('').length;
        this.wordResult = text.split(' ').filter(this.searchWords).length;
        this.vowelResult = text.split('').filter(this.searchVowel).length;
        this.consoantsResult = text.split('').filter(this.searchConsoants).length;
        this.update()
    }

    searchWords(string) {
        if (string !== '') return string;
    }

    update() {
        this.consoantTextElement.value = `${this.consoantsResult}`;
        this.caracterTextElement.value = `${this.caracterResult}`;
        this.vowelTextElement.value = `${this.vowelResult}`;
        this.wordTextElement.value = `${this.wordResult}`;
    }

    searchVowel(string) {
        if (vowel.includes(string.toLowerCase())) {
            return string;
        }
    }

    searchConsoants(string) {
        if (consoants.includes(string.toLowerCase())) {
            return string
        }
    }

}

const areaText = new Text(caractersText, wordsText, vowelsText, consoantsText);

areaTextWrite.addEventListener('input', () => {
    areaText.analise(areaTextWrite.value);
})