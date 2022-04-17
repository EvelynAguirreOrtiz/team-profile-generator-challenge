// generate html
function generateHTML(teamArr) {
  // const generatHtml = teamArr => {

  const generateManager = manager => {
    return `
      <div class="column is-narrow has-background-white-ter mt-6 p-6">
        <h1 class="title is-3 is-spaced">${manager.name}</h1>
        <h2 class="subtitle is-4">Manager</h2>
        <h3>ID: ${manager.id}</h3>
        <h3>Email: ${manager.email}</h3>
        <h3>Office Number: ${manager.officeNumber}</h3>
      </div>
      `;
  };

  const generateEngineer = engineer => {
    return `
    <div class="column is-narrow has-background-white-ter mt-6 p-6">
      <h1 class="title is-3 is-spaced">${engineer.getName()}</h1>
      <h2 class="subtitle is-4">Engineer</h2>
      <h3>ID: ${engineer.getId()}</h3>
      <h3>Email: ${engineer.getEmail()}</h3>
      <h3>GitHub: ${engineer.getGithub()}</h3>
    </div>
    `;
  };

  const generateIntern = intern => {
    return `
    <div class="column is-narrow has-background-white-ter m-6 p-6">
      <h1 class="title is-3 is-spaced">${intern.getName()}</h1>
      <h2 class="subtitle is-4">Intern</h2>
      <h3>ID: ${intern.getId()}</h3>
      <h3>Email: ${intern.getEmail()}</h3>
      <h3>School: ${intern.getSchool()}</h3>
    </div>
    `;
  };

  const arr = [];
  arr.push(teamArr.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)).join("")
  );
  arr.push(teamArr.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join("")
  );
  arr.push(teamArr.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join("")
  );
  
  return arr.join("");
}

module.exports = teamArr => {
  return `

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <title>Team Profiles</title>
  </head>
  
  <body>
    <header>
      <div class="box">
        <h1 class="title is-2">My Team</h1>
      </div>
    </header>
    <main class="columns is-mobile is-multiline is-centered">
    ${generateHTML(teamArr)}
    </main>
  </body>
  </html>
  `;
}
