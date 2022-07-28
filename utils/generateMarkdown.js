// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// License badges and license links found at: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

function renderLicenseBadge(license) {
  if (license.length === 0) {
    return ""
  } else if (license == "Apache") {
    return `![GitHub license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license == "Boost") {
    return `![GitHub license](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  } else if (license == "BSD") {
    return `![GitHub license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else if (license == "Creative Commons") {
    return `![GitHub license](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`
  } else if (license == "Eclipse") {
    return `![GitHub license](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
  } else if (license == "GNU") {
    return `![GitHub license](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (license == "Hippocratic") {
    return `![GitHub license](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)`
  } else if (license == "IBM") {
    return `![GitHub license](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
  } else if (license == "ISC") {
    return `![GitHub license](https://img.shields.io/badge/License-ISC-blue.svg)]`
  } else if (license == "MIT") {
    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`
  } else if (license == "Mozilla") {
    return `![GitHub license](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } else if (license == "ODC BY") {
    return `![GitHub license](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)`
  } else if (license == "ODCbL") {
    return `![GitHub license](https://img.shields.io/badge/License-ODbL-brightgreen.svg)`
  } else if (license == "PDDL") {
    return `![GitHub license](https://img.shields.io/badge/License-PDDL-brightgreen.svg)`
  } else if (license == "Perl") {
    return `![GitHub license](https://img.shields.io/badge/License-Perl-0298c3.svg)`
  } else if (license == "SIL") {
    return `![GitHub license](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)`
  } else if (license == "Unlicense") {
    return `![GitHub license](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  } else if (license == "WTFPL") {
    return `![GitHub license](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  } else if (license == "Zlib") {
    return `![GitHub license](https://img.shields.io/badge/License-Zlib-lightgrey.svg)`
  }
}

// Function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license.length === 0) {
    return ""
  } else if (license == "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license == "Boost") {
    return `https://www.boost.org/LICENSE_1_0.txt`
  } else if (license == "BSD") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else if (license == "Creative Commons") {
    return `http://creativecommons.org/publicdomain/zero/1.0/`
  } else if (license == "Eclipse") {
    return `https://opensource.org/licenses/EPL-1.0`
  } else if (license == "GNU") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license == "Hippocratic") {
    return `https://firstdonoharm.dev`
  } else if (license == "IBM") {
    return `https://opensource.org/licenses/IPL-1.0`
  } else if (license == "ISC") {
    return `https://opensource.org/licenses/ISC`
  } else if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license == "Mozilla") {
    return `https://opensource.org/licenses/MPL-2.0`
  } else if (license == "ODC BY") {
    return `https://opendatacommons.org/licenses/by/`
  } else if (license == "ODCbL") {
    return `https://opendatacommons.org/licenses/odbl/`
  } else if (license == "PDDL") {
    return `https://opendatacommons.org/licenses/pddl/`
  } else if (license == "Perl") {
    return `https://opensource.org/licenses/Artistic-2.0`
  } else if (license == "SIL") {
    return `https://opensource.org/licenses/OFL-1.1`
  } else if (license == "Unlicense") {
    return `http://unlicense.org/`
  } else if (license == "WTFPL") {
    return `http://unlicense.org/`
  } else if (license == "Zlib") {
    return `https://opensource.org/licenses/Zlib`
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) {
    return "No License Used For This Project"
  } else { return `
  
  ## License

  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}
    `
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#install)
  * [Usage](#usage)
  * [License](#license)
  * [GitHub Repo](#repo)
  * [Deployed App](#appLink)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## GitHub

  My Github: [${data.repo}](https://github.com/${data.repo})

  My Email: [${data.email}](mailto:${data.email}})
`;
}

module.exports = generateMarkdown;