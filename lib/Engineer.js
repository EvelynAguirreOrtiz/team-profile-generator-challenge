const Employee = require('../lib/Employee.js')

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email, github);

    this.github = github;
  }

  // getGitHub() {
  //   return "";
  // };

  // getRole() {
  //   return "Engineer";
  // };

};