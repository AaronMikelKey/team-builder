import Employee from "./employee.js";

export default class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email)
		this.github = github
	}

	getGithub() {
		return `github.com/${this.github}`
	}

	getRole() {
		return "Engineer"
	}
}