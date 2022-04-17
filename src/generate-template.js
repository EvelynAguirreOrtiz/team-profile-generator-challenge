// generate html
function generateHTML(teamArr) {

  const generateManager = manager => {
    return `
    <div class="column is-3 has-background-white-ter m-6 p-6">
      <h1 class="title is-3 is-spaced mb-3">${manager.name}</h1>
      <i class='fa fa-folder mb-2' style='font-size:36px'></i>
      <h2 class="subtitle is-4">Manager</h2>
      <h3 class="mb-1">ID: ${manager.id}</h3>
      <h3 class="mb-1">Email: <a href="mailto:${manager.email}">${manager.email}</a></h3>
      <h3 class="mb-1">Office Number: ${manager.officeNumber}</h3>
    </div>
    `;
  };

  const generateEngineer = engineer => {
    return `
    <div class="column is-3 has-background-white-ter m-6 p-6">
      <h1 class="title is-3 is-spaced mb-3">${engineer.getName()}</h1>
      <i class='fa fa-code mb-2' style='font-size:36px'></i>
      <h2 class="subtitle is-4">Engineer</h2>
      <h3 class="mb-1">ID: ${engineer.getId()}</h3>
      <h3 class="mb-1">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h3>
      <h3 class="mb-1">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></h3>
    </div>
    `;
  };

  const generateIntern = intern => {
    return `
    <div class="column is-3 has-background-white-ter m-6 p-6">
      <h1 class="title is-3 is-spaced mb-3">${intern.getName()}</h1>
      <i class="fa fa-user mb-3" style="font-size:36px"></i>
      <h2 class="subtitle is-4">Intern</h2>
      <h3 class="mb-1">ID: ${intern.getId()}</h3>
      <h3 class="mb-1">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h3>
      <h3 class="mb-1">School: ${intern.getSchool()}</h3>
    </div>
    `;
  };

  const myTeamArr = [];
  myTeamArr.push(teamArr.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)).join("")
  );
  myTeamArr.push(teamArr.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join("")
  );
  myTeamArr.push(teamArr.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join("")
  );

  return myTeamArr.join("");
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <title>Team Profiles</title>
  </head>
  <body>
    <header>
      <div class="box">
        <h1 class="title is-2">My Team</h1>
      </div>
    </header>
    <main class="columns is-mobile is-multiline is-8">
    ${generateHTML(teamArr)}
    </main>
  </body>
  </html>
  `;
}
