import fs from 'fs'
import inquirer from 'inquirer'
import questions from './src/js/questions.js'

let managerAnswers, employeeAnswers = []

const managerPrompt = () => {
	inquirer.prompt(questions.manager).then((answers) => {
		console.log(answers)
		managerAnswers = answers
		addEmployee()
	})
}

const addEmployee = () => {
	inquirer.prompt(questions.newEmployee).then((answers) => {
		if (answers.newEmployee === 'Add Engineer') {
			// TODO: add function to prompt new employee questions
		} else if (answers.newEmployee === 'Add Intern') {
			// TODO: add function to prompt new employee questions
		} else {
			// TODO: add function to build team and exit application
		}
	})
}

managerPrompt()

// TODO: convert to new function to be executed when no more employees will be added
/*
inquirer.prompt(questions.manager)
.then((answers) => {
	const dir = './dist'
	if (!fs.existsSync(dir)) { fs.mkdirSync(dir) }
	fs.writeFile(dir + '/index.html', generateWebpage(answers), err => {
		if (err) { throw new Error(err) }
		console.log('Webpage created! Check the dist folder.')
	})
})
*/