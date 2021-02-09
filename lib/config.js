// prod, qa and uat settings are saved under config folder

const prodDetails = require('../config/prod')
const qaDetails = require('../config/qa')
const uatDetails = require('../config/uat')

let envDetails = prodDetails;
console.log(`env is set to ${process.env.ENV}`);

if (process.env.ENV === 'prod') {
    envDetails = prodDetails;
} else if (process.env.ENV === 'qa') {
    envDetails = qaDetails;
} else if (process.env.ENV === 'uat') {
    envDetails = uatDetails;
}

/**
 * This returns static values for based on the System environment <<ENV>> pass via command line
 */
module.exports = {
    browser: 'chrome',
    headless: '"--headless"',
    baseUrl: envDetails.baseUrl,
    logLevel: 'info',
    maxInstances: 1,
    userName: envDetails.userName,
    password: envDetails.password,
    timeout: 10000,
    bail: 0
}