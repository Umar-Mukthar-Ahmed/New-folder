const http = require("http");
const fs = require("fs");
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));

const port = parseInt(args.port);
const homeFile = "home.html";
const projectFile = "project.html";
const registrationFile = "registration.html";

let homeContent = "";
let projectContent = "";
let registerContent = "";

fs.readFile(homeFile, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading ${homeFile}:`, err);
    process.exit(1);
  }
  homeContent = data;
});

fs.readFile(projectFile, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading ${projectFile}:`, err);
    process.exit(1);
  }
  projectContent = data;
});

fs.readFile(registrationFile, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading ${registrationFile}:`, err);
    process.exit(1);
  }
  registerContent = data;
});

http
  .createServer((request, response) => {
    const url = request.url;
    response.writeHead(200, { "Content-Type": "text/html" });

    switch (url) {
      case "/project":
        response.write(projectContent);
        break;
      case "/registration":
        response.write(registerContent);
        break;
      default:
        response.write(homeContent);
        break;
    }
    response.end();
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
