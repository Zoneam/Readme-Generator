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
function generateMarkdown(data) {
  license = data.licenseType;
  console.log(data)
  console.log("license link", renderLicenseSection())
  return `# ${data.projectName}

`;
}

module.exports = generateMarkdown;