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
	answer.innerHTML = `<span>Answer:</span> ${answers[Math.floor(Math.random() * answers.length)]}`
}

const checkQuestion = () => {
	answer.textContent = ''
	error.textContent = ''

	if (input.value !== '' && input.value.slice(-1) === '?') {
		showAnswer()
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = "The question must end with '?'."
	} else {
		error.textContent = 'You have to ask a question!'
	}

	img.classList.remove('shake-animation')
}

const shakeBill = () => {
	img.classList.add('shake-animation')
	setTimeout(checkQuestion, 1000)
}

img.addEventListener('click', shakeBill)
