'use strict'
const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

let answers = [
	'Yes',
	'No!',
	'It is better not to know. ;/',
	'Maybe someday ;)',
	'yes of course ;)',
	'Never!!!',
	'one day :)',
	'you wish!',
]

const showAnswer = () => {
    answer.textContent = answers[Math.floor(Math.random() * answers.length)]
}

const checkQuestion = () => {
    answer.textContent = ''
    error.textContent = ''

    if(input.value === '') {
        error.textContent = 'You have to ask a question!'
    } else if(!input.value.endsWith('?')){
        error.textContent = "The question must end with '?'."
    } else {
       showAnswer()
    }

    img.classList.remove('shake-animation');
}


const shakeBill = () => {
    img.classList.add('shake-animation');
    setTimeout(checkQuestion, 1000);
}

img.addEventListener('click', shakeBill)
