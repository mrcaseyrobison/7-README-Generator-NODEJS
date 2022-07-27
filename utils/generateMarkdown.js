// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// License links found at: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

function renderLicenseBadge(license) {
  if (license.length === 0) {
    return ""
  } else if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license == "BSD") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license == "Creative Commons") {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license == "Eclipse") {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (license == "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == "Hippocratic") {
    return `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`
  } else if (license == "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else if (license == "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license == "ODC BY") {
    return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`
  } else if (license == "ODCbL") {
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`
  } else if (license == "PDDL") {
    return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`
  } else if (license == "Perl") {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  } else if (license == "SIL") {
    return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`
  } else if (license == "Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else if (license == "WTFPL") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else if (license == "Zlib") {
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
  }
}

// TODO: Create a function that returns the license link
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) {
    return ""
  } else {
    return `## License
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;