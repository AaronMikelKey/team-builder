export const employeeCard = (data, divId, role) => {
	
	const {id, name, email, officeNumber, github, school, employeeRole} = data
	
	let bottomDiv

	role ? role = role : role = employeeRole

	if (officeNumber) {
		bottomDiv = `<div class='bottomDiv'> Office Number: ${officeNumber} </div>` 
	} else if (github) {
		bottomDiv = `<div class='bottomDiv'> Github: <a href='https://github.com/${github}' target='_blank' >${github}</a> </div>` 
	} else {
		bottomDiv = `<div class='bottomDiv'> School: ${school} </div>` 
	}

	return `<div id=${divId} class='card'>
		<div class='name'>${name}</div>
		<div class='role'>${role}</div>
		<div class='employeeId'>ID: ${id}</div>
		<div class='email'>Email: <a href=mailto:${email}>${email}</a></div>
		${bottomDiv}
</div>`
}