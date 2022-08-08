import fs from 'fs'
import inquirer from 'inquirer'
import { generateWebpage } from './src/js/generate-webpage.js'
import questions from './src/js/questions.js'

let managerAnswers, employeeAnswers = []

const managerPrompt = () => {
	inquirer.prompt(questions.manager).then((answers) => {
		managerAnswers = answers
		addEmployee()
	})
}

const addEmployee = () => {
	inquirer.prompt(questions.newEmployee).then((answers) => {
		if (answers.newEmployee === 'Add Engineer') {
			newEngineer()
		} else if (answers.newEmployee === 'Add Intern') {
			newIntern()
		} else {
			buildTeam()
		}
	})
}

const newEngineer = () => {
	inquirer.prompt(questions.engineer).then((answers) => {
		answers.role = 'Engineer'
		employeeAnswers.push(answers)
		addEmployee()
	})
}

const newIntern = () => {
	inquirer.prompt(questions.intern).then((answers) => {
		answers.role = 'Intern'
		employeeAnswers.push(answers)
		addEmployee()
	})
}

const buildTeam = () => {
	// create /dist directory if one doesn't exist
	const dir = './dist'
	if (!fs.existsSync(dir)) { fs.mkdirSync(dir) }

	const newPage = generateWebpage(managerAnswers, employeeAnswers)

	fs.writeFile(dir + '/index.html', JSON.parse(newPage), err => {
		if (err) { throw new Error(err) }
		console.log('Webpage created! Check the dist folder.')
	})
}

managerPrompt()