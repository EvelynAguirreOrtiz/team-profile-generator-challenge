const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require(`./src/generate-template`)

// Employee Questions
const employeeQuestions = [
    {
      // Employee name
      type: 'input',
      name: 'name',
      message: 'What is the employee name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the employee name!');
          return false;
        }
      }
    },
    {
      // employee ID
      type: 'input',
      name: 'id',
      message: 'Please enter employee ID number (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter employee ID number!');
          return false;
        }
      }
    },
    {
      // employee email
      type: 'input',
      name: 'email',
      message: 'Please enter employee email (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter employee email!');
          return false;
        }
      }
    },

    // {
    //   // Employee role
    //   type: 'checkbox',
    //     name: 'role',
    //       message: 'What is the employee role?',
    //         choices: ['Employee', 'Manager', 'Engineer', 'Intern']
    // },

  ];

// additional questions
// {
//   // Manager office number
//   type: 'input',
//     name: 'officeNumber',
//       message: "Enter manager office number. (Required)",
//         validate: officeNumberInput => {
//           if (officeNumberInput) {
//             return true;
//           } else {
//             console.log("Please enter manager office number!");
//             return false;
//           }
//         }
// },

// {
//   // Engineer GitHub user name
//   type: 'input',
//     name: 'github',
//       message: 'Enter engineer GitHub username (Required)',
//         validate: githubInput => {
//           if (githubInput) {
//             return true;
//           } else {
//             console.log('Please enter engineer GitHub user name!');
//             return false;
//           }
//         }
// };

// {
//   // Intern school
//   type: 'input',
//     name: 'school',
//       message: 'Enter intern school (Required)',
//         validate: schoolInput => {
//           if (schoolInput) {
//             return true;
//           } else {
//             console.log('Please enter intern school!');
//             return false;
//           }
//         }
// };

// Function to write HTML file
function writeToFile(data) {

  fs.writeFile('./dist/index.html', generateTemplate(data), err =>
    err ? console.error(err) : console.log('HTML created!')
  );
}

// Function to initialize app                                                         
function enterEmployeeData() {
  inquirer.prompt(employeeQuestions)
  .then((data) => {
    writeToFile(data);
  });

  // .then((data) => {
  //   console.log(data);
  // });
}
enterEmployeeData();

