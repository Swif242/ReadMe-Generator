
// const proPic = require("./api");


// module.exports = generateMarkdown;
function generateMarkdown(answers, avatar) {
  return `

[![Project Badge](https://img.shields.io/badge/Application-Awesome-green)](https://github.com/Swif242/ReadMe-Generator)
# ${answers.title}\n
## Description \n
${answers.description}\n
## Table of Contents \n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Contributors](#contributors)\n
- [License](#license)\n
- [Tests](#tests)\n
- [Questions](#questions)\n
## Installation \n
${answers.installation}\n
## Usage \n
${answers.usage}\n
## License \n
${answers.license}\n
## Contributing \n
${answers.contributing}\n
## Tests \n
${answers.test}\n
## Deployed
${answers.deploy}
# Readme created using my ReadMe-Generator node.js CLI app 

## Questions \n
![Profile Image](${avatar})
`;
}
module.exports = generateMarkdown;