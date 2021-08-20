// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
      name: "title",
      message: "Project Title:",
    },
    {
      name: "description",
      message: "Project Description:",
    },
    {
      name: "installation",
      message: "Installation Instructions:",
    },
    {
      name: "usage",
      message: "Usage Instructions:",
    },
    {
      name: "contribution",
      message: "Contribution Guidelines:",
    },
    {
      name: "test",
      message: "Test Instructions:",
    },
    {
      name: "license",
      message: "Liscense:",
      type: "list",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      name: "github",
      message: "Github Username:",
    },
    {
      name: "email",
      message: "E-Mail Address:",
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err
        ? console.log(err)
        : console.log("Success: Your file has been generated.")
    );
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile(`${answers.title}_README.md`, generateMarkdown.generateMarkdown(answers));
    });
  }

// Function call to initialize app
init();