import Employee from "./employee.js";

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email)
		this.officeNumber = officeNumber
		this.role = "Manager"

		}
		getOfficeNumber() {
			return this.officeNumber
		}

		getRole() {
			return this.role
	}

}

export default Manager