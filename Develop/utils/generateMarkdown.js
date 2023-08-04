
function renderLicenseBadge(license) {
  return `[![License: IPL 1.0](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`

}

function bootcampBadge() {
  return '![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)'
}

function nodejsBadge() {
  return '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)'
}

function jsBadge() {
  return '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)'
}

function githubURL(githubUserName) {
  return `https://github.com/${githubUserName}`
}

export const getMarkdown = (answers) => {
  const { title, description, installInstructions, usageInfo, guidelines, testInstructions, email } = answers
  let userName = answers.githubUserName

  return `
  | ${bootcampBadge()} | ${nodejsBadge()} | ${jsBadge()} |
  |--|--|--|

  #### License
 > This application is covered by:${'&nbsp;    '}${renderLicenseBadge(answers.license)} 

  # Project: ${title}
  
  
  ### <a id="readme-description"></a>Description
  
  ${description}
  
  
  ###  <a id="readme-installation"></a>Installation
  
  > ${installInstructions}
  
  
  ### <a id="readme-usage"></a>Usage
  
  > ${usageInfo}
  
  
  ### <a id="readme-guidelines"></a>Contribution Guidelines
  
  > ${guidelines}
  
  
  ### <a id="readme-test"></a>Test
  
  > ${testInstructions}
  

  # Questions?
  
  ### Reach me at the following for any questions or concerns...

 - E-mail: ${email}
 - Github: ${githubURL(userName)}
  
 #### Table of Contents
  
  [Description](#readme-description)
  [Installation](#readme-installation)
  [Usage](#readme-usage)
  [Guidelines](#readme-guidelines)
  [Test](#readme-test)
  
  `
}
