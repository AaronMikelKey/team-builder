const questions = {
	manager: [
	{
		type: 'input',
		name: 'name',
		message: `What is your team Manager's name?`
	},
	{
		type: 'input',
		name: 'id',
		message: `What is your team Manager's employee ID?`
	},
	{
		type: 'input',
		name: 'email',
		message: `What is your team Manager's email address?`
	},
	{
		type: 'input',
		name: 'officeNumber',
		message: `What is your team Manager's office number?`
	},
	
],

newEmployee: [
	{
		type: 'list',
		name: 'newEmployee',
		message: 'Would you like to add a team member?',
		choices: ['Add Engineer', 'Add Intern', 'Finish building team']
	}
],

engineer: [
	{
		type: 'input',
		name: 'name',
		message: `What is your engineer's name?`
	},
	{
		type: 'input',
		name: 'id',
		message: `What is your engineer's employee ID?`
	},
	{
		type: 'input',
		name: 'email',
		message: `What is your engineer's email address?`
	},
	{
		type: 'input',
		name: 'github',
		message: `What is your engineer's github username?`
	},
	
],

intern: [
	{
		type: 'input',
		name: 'name',
		message: `What is your intern's name?`
	},
	{
		type: 'input',
		name: 'id',
		message: `What is your intern's employee ID?`
	},
	{
		type: 'input',
		name: 'email',
		message: `What is your intern's email address?`
	},
	{
		type: 'input',
		name: 'school',
		message: `What school does your intern attend?`
	},
	
],
}

export default questions