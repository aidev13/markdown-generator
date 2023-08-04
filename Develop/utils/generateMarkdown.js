// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
return `[![License: IPL 1.0](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`

}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
export const getMarkdown = (answers) => {

  const gitURL = `https://github.com/${answers.githubUserName}`

  return `
  |License| ${renderLicenseBadge(answers.license)} |
  |--|--|
  
  # Project: ${answers.title}
  
  
  ### <a id="readme-description"></a>Description
  
  ${answers.description}
  
  
  ###  <a id="readme-installation"></a>Installation
  
  > ${answers.installInstructions}
  
  
  ### <a id="readme-usage"></a>Usage
  
  > ${answers.usageInfo}
  
  
  ### <a id="readme-guidelines"></a>Contribution Guidelines
  
  > ${answers.guidelines}
  
  
  ### <a id="readme-test"></a>Test
  
  > ${answers.testInstructions}
  

  # Questions?
  
  ### Reach me at the following for any questions or concerns...

- E-mail: ${answers.email}
- GitHub: ${answers.githubUserName}
  
#### Table of Contents
  
  [Description](#readme-description)
  [Installation](#readme-installation)
  [Usage](#readme-usage)
  [Guidelines](#readme-guidelines)
  [Test](#readme-test)
  
  `
}
