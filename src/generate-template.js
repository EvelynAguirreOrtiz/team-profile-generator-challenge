const Manager = require("../lib/Manager");

// create Manager card
const generateManager = teamArr => {

teamArr.filter(Manager)
};


// create Engineer card
// const generateEngineer = aboutEngineer => {
//   if (!aboutEngineer) {

// function generateEngineer(engineer) {
//   if (!engineer) {
//     return '';
//   }

//   return `
//   <div>
//   <p>${engineer.name}</p>
//   <p>${engineer.role}</p>
//   <p>${engineer.id}</p>
//   <p>${engineer.email}</p>
//   <p>${engineer.github}</p>
//   <p>3</p>
//  </div>
//   `;
// };

// create Intern card
// const generateIntern = aboutIntern => {
//   if (!aboutIntern) {

// function generateIntern(intern) {
//   if (!intern) {
//     return '';
//   }

//   return `
//   <div>
//   <p>${intern.name}</p>
//   <p>${intern.role}</p>
//   <p>${intern.id}</p>
//   <p>${intern.email}</p>
//   <p>${intern.school}</p>
//   <p>4</p>
//  </div>
//   `;
// };

const generateTeam = teamArr => {
  if (!teamArr) {
    return '';
  }

  return `
  <div>

  </d>`;
 
}

// generate html
module.exports = templateData => {
  const { name, id, email, ...school } = templateData;
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profiles</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

  </head>
  
  <body>
    <header>
      <div >
        <h1>My Team</h1>
      </div>
    </header>
    <main>
    ${templateData}
    </main>
  </body>
  </html>
  `;
}