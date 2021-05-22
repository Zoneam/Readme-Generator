// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let license;
let licenseLink;
let licenseBadge;

function renderLicenseBadge() {
  switch (license) {
    case "MIT":
      licenseBadge = "License-MIT-yellow.svg";
      break;
    case "APACHE 2.0":
      licenseBadge = "License-Apache%202.0-blue.svg";
      break;
    case "GPL 3.0":
      licenseBadge = "License-GPLv3-blue.svg";
      break;
    case "BSD 3":
      licenseBadge = "License-BSD%203--Clause-blue.svg";
      break;
    default:
      licenseBadge = "";
  }
  return (licenseBadge);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  switch (license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "APACHE 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD 3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      licenseLink = "";
  }
  return (licenseLink);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
  let licenseBadge = renderLicenseBadge();
  let licenseLink = renderLicenseLink();
  return (licenseBadge ? `[![License](https://img.shields.io/badge/${licenseBadge})](${licenseLink})` : ``)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  license = answers.licenseType;
  licenseBadge = renderLicenseSection();

    return readmeMD = `# ${answers.projectName}

## Description 
 
---
${answers.projectDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)

## Installation

*Steps required to install project and how to get the development environment running:*

${answers.commandInstall}
---
## Usage 

*Instructions and examples for use:*

${answers.aboutRepo}
---
## Tests

*Tests for application and how to run them:*

${answers.commandTest}
---
## License

${licenseBadge}
---

## Questions?

For any questions, please contact me with the information below:

## [<img src="https://image.flaticon.com/icons/png/512/726/726623.png" width="40" >](mailto:${answers.eMail})      [<img src="https://image.flaticon.com/icons/png/512/270/270798.png" width="40" >](https://github.com/${answers.gitHubName})
`;
}

module.exports = generateMarkdown;