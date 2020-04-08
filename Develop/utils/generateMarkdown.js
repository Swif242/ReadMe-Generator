
const proPic = require("./api");


// module.exports = generateMarkdown;
function generateMarkdown(data) {
  return `
# ${data.title}\n
## Description \n
${data.description}\n
## Table of Contents \n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Contributors](#contributors)\n
- [License](#license)\n
- [Tests](#tests)\n
- [Questions](#questions)\n
## Installation \n
${data.installation}\n
## Usage \n
${data.usage}\n
## License \n
${data.license}\n
## Contributing \n
${data.contributing}\n
## Tests \n
${data.test}\n
## Questions \n
![Profile Image](${data.avatar})
`;
}
module.exports = generateMarkdown;