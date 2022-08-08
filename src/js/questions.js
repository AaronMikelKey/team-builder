const questions = {
	manager: [
	{
		type: 'input',
		name: 'managerName',
		message: `What is your team Manager's name?`
	},
	{
		type: 'input',
		name: 'managerId',
		message: `What is your team Manager's employee ID?`
	},
	{
		type: 'input',
		name: 'managerEmail',
		message: `What is your team Manager's email address?`
	},
	{
		type: 'input',
		name: 'managerOffice',
		message: `What is your team Manager's office number?`
	},
	
],

newEmployee: [
	{
		type: 'confirm',
		name: 'newEmployee',
		message: 'Would you like to add a team member?'
	}
],

employeeRole: [
	{
		type: 'list',
		name: 'employeeRole',
		message: 'Which type of employee would you like to add?',
		choices: ['Engineer', 'Intern']
	}
]
}

export default questions