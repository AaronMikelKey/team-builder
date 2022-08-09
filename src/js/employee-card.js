export const employeeCard = (data, divId, role) => {
	
	const {id, name, email, officeNumber, github, school, employeeRole} = data
	
	let bottomDiv

	role ? role = role : role = employeeRole

	if (officeNumber) {
		bottomDiv = `<div> Office Number: ${officeNumber} </div>` 
	} else if (github) {
		bottomDiv = `<div> Github: <a href='https://github.com/${github}' >${github}</a> </div>` 
	} else {
		bottomDiv = `<div> School: ${school} </div>` 
	}

	return `<div id=${divId}>
	<div>
		<h2>${name}</h2>
		<h3>${role}</h3>
		<div>ID: ${id}</div>
		<div>Email: <a href=mailto:${email}>${email}</a></div>
		${bottomDiv}
	</div>
</div>`
}