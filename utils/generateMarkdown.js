// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

![License](https://img.shields.io/badge/license-${data.license}-brightgreen) 
<br />

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
This application is covered by the ${data.license} license. 

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
