import Employee from "./employee";

export default class Engineer extends Employee {
	constructor(github) {
		this.github = github
	}

	getGithub() {
		return this.github
	}

	getRole() {
		return "Engineer"
	}
}