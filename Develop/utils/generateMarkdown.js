// License Badge Return
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

// License Link Return
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`;
  }
  return '';
}

// License Return
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This application is covered under the ${license} license.`;
  }
  return '';
}

// ReadMe Markdown Gen Function
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Usage](#usage)
  - [Installation](#installation)
  - [Credits & Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ${renderLicenseLink(data.license)}

  ## Usage

  ${data.usage}
  
  ## Installation
  
  ${data.installation}
  
  
  ## Credits & Contributions
  
  ${data.contributions}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  For any questions, feel free to contact me:
  
  GitHub: [${data.github}](https://github.com/${data.github})
  
  Email: ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
