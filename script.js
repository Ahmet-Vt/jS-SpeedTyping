const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const counter = document.getElementById('counter');
const timerElement = document.getElementById('timer');
let remainingTime = 90;
let count = 0;
const sure = "time";
quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    let correct = true;
    const arrayValue = quoteInputElement.value.split('');
    arrayQuote.forEach((characterSpan, index) => {
        
        const character = arrayValue[index];
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        }
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        }
        else {
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('correct');
            correct = false;
        }

    }
    )
    if (correct === true) 
    { 
        count++;
        renderNewQuote();
        counter.textContent = count ;
    }
})
function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(res => res.json())
        .then(data => data.content)
}
async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerHTML = '';
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        quoteDisplayElement.appendChild(characterSpan);
        
    });
    
    quoteInputElement.value = null;
    startTimer();
}

let startTime;
function startTimer()
{
    timerElement.innerText = 0;
    startTime = new Date();
    setInterval(()=>{
        timer.innerText = getTimerTime();
    },1000)
}
function getTimerTime()
{
   return Math.floor((new Date() - startTime)/1000);
}
startTimer();
renderNewQuote();