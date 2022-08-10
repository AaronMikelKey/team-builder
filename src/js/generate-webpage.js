import { employeeCard } from "./employee-card.js"

export const generateWebpage = (manager, employees) => {
	let count = 1
	const managerCard = employeeCard(manager, 0, 'Manager')
	let employeeCards = []
	if (employees) {
		employees.forEach(employee => {
			employeeCards.push(employeeCard(employee, count, employee.role))
			count += 1
		});
	}
	employeeCards = employeeCards.toString().replace(/\,/g, '')
	return JSON.stringify(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>My Team</title>
		<link rel="stylesheet" type="text/css" href="./styles.css">
	</head>
	<body>
	<header> My Team </header>
	<div id='card-holder'>
		${managerCard + employeeCards}
	</div>
	</body>
	</html>`)
}