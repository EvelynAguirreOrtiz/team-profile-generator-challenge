// create Manager card
const generateManager = manager => {
  teamArr.filter(employee => employee.getRole() === "Manager").map(Manager)
  return `
    <div class="column is-narrow">
      <h1 class="title is-3">${manager.name}</h1>
      <h2 class="subtitle is-4">Manager</h2>
      <h3 class="subtitle is-6">ID: ${manager.id}</h3>
      <h3 class="subtitle is-6">Email: ${manager.email}</h3>
      <h2 class="subtitle is-6">Office Number: ${manager.officeNumber}</h2>
    </div>
    `;
};

const generateEngineer = engineer => {
  // teamArr.filter(employee => employee.getRole() === "Engineer").map(engineer)
  return `
  <div class="column is-narrow">
    <h1 class="title is-3">${engineer.getName()}</h1>
    <h2 class="subtitle is-4">Engineer</h2>
    <h3 class="subtitle is-6">ID: ${engineer.getId()}</h3>
    <h3 class="subtitle is-6">Email: ${engineer.getEmail()}</h3>
    <h3 class="subtitle is-6">GitHub: ${engineer.getGithub()}</h3>
  </div>
  `;
};

const generateIntern = intern => {
  
  return `
  <div class="column is-narrow">
  <h1 class="title is-3">${intern.getName}</h1>
  <h2 class="subtitle is-4">Intern</h2>
  <h3 class="subtitle is-6">ID: ${intern.getId}</h3>
  <h3 class="subtitle is-6">Email: ${intern.getEmail}</h3>
  <h3 class="subtitle is-6">School: ${intern.getSchool}</h3>
 </div>
  `;
};

// generate html
function generateHTML(teamArr) {

// const generateHtml = teamArr => {

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

  ${generateManager(manager)}


    

    </main>
  </body>
  </html>
  `;
}

module.exports = generateHTML;
