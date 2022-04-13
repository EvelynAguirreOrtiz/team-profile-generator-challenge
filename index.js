const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require(`./src/generate-template`);
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { listenerCount } = require('process');

const teamArr = [];

// Manager Questions
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the manager name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter the manager name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Please enter manager ID number (Required)',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter manager ID number!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter manager email (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter manager email!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "Enter manager office number. (Required)",
    validate: officeNumberInput => {
      if (officeNumberInput) {
        return true;
      } else {
        console.log("Please enter manager office number!");
        return false;
      }
    }
  }
];
// Engineer Questions
const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineer name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter the engineer name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Please enter engineer ID number (Required)',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter engineer ID number!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter engineer email (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter engineer email!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter engineer GitHub username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter engineer GitHub user name!');
        return false;
      }
    }
  }
];
// Intern Questions
const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the intern name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter the intern name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter intern ID number (Required)',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter intern ID number!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter intern email (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter intern email!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter intern school (Required)',
    validate: schoolInput => {
      if (schoolInput) {
        return true;
      } else {
        console.log('Please enter intern school!');
        return false;
      }
    }
  }
];

// Function to write HTML file
function writeToFile(data) {

  fs.writeFile('./dist/index.html', generateTemplate(data), err =>
    err ? console.error(err) : console.log('HTML created!')
  );
}

function promptMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to do?',
      choices: [
        'Create Engineer',
        'Create Intern',
        'Build Team'
      ]
    }
  ]).then((choice) => {
    console.log(choice);

    if (choice.options === 'Create Engineer') {
      console.log("creating Engineer")
      enterEngineerData();
    }

    if (choice.options === 'Create Intern') {
      console.log("creating Intern")
      enterInternData();
    }

    if (choice.options === 'Build Team') {
      console.log("building Team")
      writeToFile(teamArr)
    }

  })
}

function enterEngineerData() {
  inquirer.prompt(engineerQuestions).then((data) => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
    // writeToFile(data);
    teamArr.push(engineer);
    console.log(teamArr);
    promptMenu();
  });
}

function enterInternData() {
  inquirer.prompt(internQuestions).then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school)
    // writeToFile(data);
    teamArr.push(intern);
    console.log(teamArr);
    promptMenu();
  });
}

// Function to initialize app                                                         
function enterManagerData() {
  inquirer.prompt(managerQuestions).then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    // writeToFile(data);
    teamArr.push(manager);
    console.log(teamArr);
    console.log(manager);
    promptMenu();
  });
}
enterManagerData();

