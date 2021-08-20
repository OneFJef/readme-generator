const dayjs = require("dayjs");

// Creates license badge to be palced at the top of the README file.
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

// Creates HTML link to the license.
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "";
    case "Apache 2.0":
      return "[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)";
    case "GPL 3.0":
      return "[https://www.gnu.org/licenses/](https://www.gnu.org/licenses/)";
    case "BSD 3":
      return "";
    default:
      break;
  }
}

// Creates copyright code for the selected license.
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `Copyright ${dayjs().format(
        "YYYY"
      )} Jef Mitchell\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    case "Apache 2.0":
      return `Copyright ${dayjs().format(
        "YYYY"
      )} Jef Mitchell\n\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at\n\n${renderLicenseLink(
        "Apache 2.0"
      )}\n\nUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;
    case "GPL 3.0":
      return `Copyright ${dayjs().format(
        "YYYY"
      )} Jef Mitchell\n\nThis program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\n\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.\n\nYou should have received a copy of the GNU General Public License along with this program.  If not, see ${renderLicenseLink(
        data.license
      )}`;
    case "BSD 3":
      return `Copyright ${dayjs().format(
        "YYYY"
      )} Jef Mitchell\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n- Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
    default:
      break;
  }
}

// Creates a complete Markdown file and with the answers from the index.js prompts.
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ---
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ---
  
  ## Installation
  
  To install necessary dependencies, run the following command: 
  
  \t${data.installation}
  
  ---
  
  ## Usage
  
  
  \t${data.usage}
  
  ---
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ---
  
  ## Tests
  
  To run test, run the following command:
  
  \t${data.test}
  
  ---
  
  ## Questions
  
  If you have any questions about the rep, open an issue or contact me directly at [${
    data.email
  }](mailto:${
    data.email
  }). You can find more of my work at [GitHub](https://github.com/${
    data.github
  }).
  `;
}

module.exports.generateMarkdown = generateMarkdown;
