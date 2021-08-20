// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        return "![License](https://img.shields.io/badge/license-MIT-blue)\n";
      case "Apache 2.0":
        return "![License](https://img.shields.io/badge/license-Apache%202.0-blue)\n";
      case "GPL 3.0":
        return "![License](https://img.shields.io/badge/license-GPL%203.0-blue)\n";
      case "BSD 3":
        return "![License](https://img.shields.io/badge/license-BSD%203-blue)\n";
      default:
        break;
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;