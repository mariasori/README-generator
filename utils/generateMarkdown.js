//Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == 'Apache') {
    return licensebadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]'
  } else if (data.license == 'Boost') {
    return licensebadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
  } else if (data.license == 'GNU') {
    return licensebadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  } else if (data.license == 'IBM') {
    return licensebadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
  } else if (data.license == 'MIT') {
    return licensebadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (data.license == 'Mozilla') {
    return licensebadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
  } else if (data.license == 'Open Database') {
    return licensebadge = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]'
  }
  else {
    return licensebadge = '';
  }
}

//Create a function that returns the license link
//If there is no license, return an empty string

function renderLicenseLink(data) {  
  if (data.license == 'Apache') {
    return licenselink = '(https://opensource.org/licenses/Apache-2.0)'
  } else if (data.license == 'Boost') {
    return licenselink = '(https://www.boost.org/LICENSE_1_0.txt)'
  } else if (data.license == 'GNU') {
    return licenselink = '(https://www.gnu.org/licenses/gpl-3.0)   '
  } else if (data.license == 'IBM') {
    return licenselink = '(https://opensource.org/licenses/IPL-1.0)'
  } else if (data.license == 'MIT') {
    return licenselink = '(https://opensource.org/licenses/MIT)'
  } else if (data.license == 'Mozilla') {
    return licenselink = '(https://opensource.org/licenses/MPL-2.0)'
  } else if (data.license == 'Open Database') {
    return licenselink = '(https://opendatacommons.org/licenses/odbl/)'
  }
  else {
    return licenselink = '';
  }
}

//Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license == "None") {
    return licensesection = 'This project is not covered by any open source license.  All rights are reserved.'
  }
  else {
    return licensesection = `${licensebadge}${licenselink}  This project is covered by the ${data.license} license.`
  }
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

${renderLicenseBadge(data)}${renderLicenseLink(data)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data)}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
Find me on GitHub: [${data.username}](https://github.com/${data.username})
<br />
Email me with any questions: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
