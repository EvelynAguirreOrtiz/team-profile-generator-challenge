const Employee = require('../lib/Employee.js')

class Intern extends Employee {
  constructor(school) {
    super(name, id, email, school);

    this.school = school;
  }

  // getSchool() {
  //   return "";
  // };

  // getRole() {
  //   return "Intern";
  // };

};