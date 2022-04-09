class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }


  getName() {
    return {
      name: this.name
    };

  };

  // getId() {
  //   return `${this.name}'s health is now ${this.health}!`;
  // };

  // getEmail() {
  //   const ;
  //   const ;

  //   return ;
  // };

  // getRole(health) {
  //   this.health -= health;

  //   if (this.health < 0) {
  //     this.health = 0;
  //   }
  // }
};
module.exports = Employee;