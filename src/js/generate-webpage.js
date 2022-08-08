import { employeeCard } from "./employee-card.js"

export const generateWebpage = (manager, employees) => {
	let count = 1
	const managerCard = employeeCard(manager, 0, 'Manager')
	const employeeCards = []
	if (employees) {
		employees.forEach(employee => {
			employeeCards.push(employeeCard(employee, count, employee.role))
			count += 1
		});
	}
	return JSON.stringify(managerCard + employeeCards)
}