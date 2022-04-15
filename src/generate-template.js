const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// create Manager card
// const generateManager = managerArr => {

function generateManager(data) {

  return `

  <div class="column is-narrow">
      <h1 class="title is-3">${manager.name}</h1>
      <h2 class="subtitle is-4">${manager.role}</h2>
      <h3 class="subtitle is-6">ID: ${manager.id}</h3>
      <h3 class="subtitle is-6">Email: ${manager.email}</h3>
      <h2 class="subtitle is-6">Office Number: ${manager.officeNumber}</h2>
      <p>1</p>
  </div>
    `;
};
generateManager();

// create Engineer card
// const generateEngineer = aboutEngineer => {
//   if (!aboutEngineer) {

function generateEngineer(data) {
  if (!data) {
    return '';
  }

  return `
  <div class="column is-narrow">
  <h1 class="subtitle is-3">${Engineer.name}</h1>
  <h2 class="subtitle is-4">${Engineer.role}</h2>
  <h3 class="subtitle is-6">ID: ${Engineer.id}</h3>
  <h3 class="subtitle is-6">Email: ${Engineer.email}</h3>
  <h3 class="subtitle is-6">GitHub: ${Engineer.github}</h3>
  <p>3</p>
 </div>
  `;
};
generateEngineer();

// create Intern card
// const generateIntern = aboutIntern => {
//   if (!aboutIntern) {

function generateIntern(intern) {
  if (!intern) {
    return '';
  }
  return `
  <div class="column is-narrow">
  <h1 class="subtitle is-3">${Intern.name}</h1>
  <h2 class="subtitle is-4">${Intern.role}</h2>
  <h3 class="subtitle is-6">ID: ${Intern.id}</h3>
  <h3 class="subtitle is-6">Email: ${Intern.email}</h3>
  <h3 class="subtitle is-6">School: ${Intern.school}</h3>
  <p>4</p>
 </div>
  `;
};
generateIntern();

// const generateTeam = teamArr => {
//   if (!teamArr) {
//     return '';
//   }

//   return `
//   <div>

//   </div>`;

// }

// generate html
function generateHTML(data) {


  const { name, role, id, email, officeNumber, github, school } = data;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profiles</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">

  </head>
  
  <body>
    <header>
      <div class="box">
        <h1 class="title is-1">My Team</h1>
      </div>
    </header>
    <main class="columns is-mobile is-multiline is-centered">
    ${data}
    ${generateManager(name, email)}
    ${generateEngineer(data)}
    ${generateIntern(data)}
    </main>
  </body>
  </html>
  `;
}
module.exports = generateHTML;
