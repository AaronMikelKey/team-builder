const employeeCard = (name, id, email, github, officeNumber, school) => {
	let role
	if (officeNumber) { 
		role = 'Manager' 
	} else if ( school ) {
		role = 'Intern'
	} else {
		role = 'Engineer'
	}

	return `<div id=${id}>
		<div> 
			<h2> ${name} </h2>
			<h3> ${role} </h3>
		</div>

	</div>`
}