let inputText = document.getElementById('carta-texto')
let generateButton = document.getElementById('criar-carta')
generateButton.addEventListener('click',generateLetter)
let letter = document.getElementById('carta-gerada')
let wordCount = document.getElementById('carta-contador')

let styleAray = ['newspaper','magazine1','magazine2']
let sizeArray = ['medium','big','reallybig']
let rotationArray = ['rotateleft','rotateright']
let inclinationArray = ['skewleft','skewright']

function generateLetter() {
    while (letter.firstChild) {
        letter.removeChild(letter.firstChild);
    }
    if (inputText.value == '') {
        letter.innerText = 'Por favor, digite o conteúdo da carta.'
    } else if (checkValidInput(inputText.value) == false) {
        letter.innerText = 'Por favor, digite o conteúdo da carta.'
    }
    else {
        let str = inputText.value
        let words = str.split(" ");
        wordCount.innerText = words.length
        for (let i = 0; i < words.length; i += 1) {
            let newWord = document.createElement('span')
            newWord.innerText = words[i]
            newWord.classList.add(styleAray[Math.floor(Math.random() * 3)])
            newWord.classList.add(sizeArray[Math.floor(Math.random() * 3)])
            newWord.classList.add(rotationArray[Math.floor(Math.random() * 2)])
            newWord.classList.add(inclinationArray[Math.floor(Math.random() * 2)])
            letter.appendChild(newWord)
        }
        let span = document.getElementsByTagName('span')
        for (let i = 0; i<span.length; i +=1) {
            console.log(span[i].innerText)
            span[i].addEventListener('click',setClasses)
        }
    }
}

function checkValidInput(string) {
    let flag = false
    for (let i = 0; i < string.length; i += 1) {
        if (string[i] != ' ') {
            flag = true
        }
    }
    return flag
}

function setClasses(event) {
    event.target.className = ''
    event.target.classList.add(styleAray[Math.floor(Math.random() * 3)])
    event.target.classList.add(sizeArray[Math.floor(Math.random() * 3)])
    event.target.classList.add(rotationArray[Math.floor(Math.random() * 2)])
    event.target.classList.add(inclinationArray[Math.floor(Math.random() * 2)])
}



