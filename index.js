import fs from 'fs'
import inquirer from 'inquirer'
import questions from './src/js/questions'

inquirer.prompt(questions)
.then((answers) => {
	const dir = './dist'
	if (!fs.existsSync(dir)) { fs.mkdirSync(dir) }
	fs.writeFile(dir + '/index.html', generateWebpage(answers), err => {
		if (err) { throw new Error(err) }
		console.log('Webpage created! Check the dist folder.')
	})
})