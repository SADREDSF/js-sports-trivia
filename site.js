
// import the utility functions "decodeHtml" and "shuffle"
import { decodeHtml, shuffle } from './utils.js' 

// get the elements from the DOM
const questionElement = document.querySelector('#question')
const answersElement = document.querySelector('#answers')
const nextQuestionElement = document.querySelector('#nextQuestion')

// IIFE (so we can use async/await)
;(async () => {
	
	// todo: create your "getNextQuestion" function
	
	const GetNextQuestion = async () => {
		const url = "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple"
		const response = await fetch(url)
        const json = await response.json()
		console.log(response)
        

		const { question, correct_answer: correct, incorrect_answers: incorrect } = json.results[0]
	 	const answers = shuffle([ ...incorrect, correct ])
		return { question, answers, correct }
		
	}
	const question = await GetNextQuestion()
	
	
	/* document.getElementById('#nextQuestion').addEventListener('click', GetNextQuestion(question){

	//})*/

	// todo: create your "renderQuestion" function
	questionElement.textContent = question.question
	answersElement.textContent = question.answers
	
	// todo: add the event listener to the "nextQuestion" button
	const nextQuestionElement = document.querySelector('#nextQuestion')
	nextQuestionElement.addEventListener("click", GetNextQuestion);{
	
	}
})()

// mimic a click on the "nextQuestion" button to show the first question
nextQuestionElement.click()
