import fs from 'fs'
import inquirer from 'inquirer'
import Engineer from './lib/Engineer.js'
import Manager from './lib/manager.js'
import Intern from './lib/intern.js'
import { generateWebpage } from './src/js/generate-webpage.js'
import questions from './src/js/questions.js'

let managerAnswers, employeeAnswers = []

const managerPrompt = () => {
	inquirer.prompt(questions.manager).then((answers) => {
		let e = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
		console.log(e)
		managerAnswers = e
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
		let e = new Engineer(answers.name, answers.id, answers.email, answers.github)
		console.log(e)
		employeeAnswers.push(e)
		addEmployee()
	})
}

const newIntern = () => {
	inquirer.prompt(questions.intern).then((answers) => {
		let e = new Intern(answers.name, answers.id, answers.email, answers.school)
		employeeAnswers.push(e)
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