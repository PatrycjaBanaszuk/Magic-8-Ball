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
    const randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    answer.textContent = randomAnswer
    
}

const checkQuestion = () => {
    if(input.value === '') {
        error.textContent = 'You have to ask a question!'
        answer.textContent = ''
    } else if(!input.value.endsWith('?')){
        answer.textContent = ''
        error.textContent = "The question must end with '?'."
    } else {
        
       showAnswer()
       error.textContent = ''
    }
    
}


const shakeBill = () => {
if(img.classList.contains('shake-animation')){
    img.classList.remove('shake-animation')
    img.classList.add('shake-animation')
    setTimeout(checkQuestion, 2000)

} else {
    img.classList.add('shake-animation')
    setTimeout(checkQuestion, 2000)
}
}



 

img.addEventListener('click', shakeBill)


