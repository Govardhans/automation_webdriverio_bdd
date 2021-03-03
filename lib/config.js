// prod, qa and uat settings are saved under config folder

const prodDetails = require('../config/prod')
const qaDetails = require('../config/qa')
const uatDetails = require('../config/uat')

let envDetails;
const env = process.env.ENV;

console.log(`env is set to ${env}`);

switch (env) {
    case 'prod':
        envDetails = prodDetails;
        break;
    case 'qa':
        envDetails = qaDetails;
        break;
    case 'uat':
        envDetails = uatDetails;
        break;
    default:
        envDetails = prodDetails;
}

function setHeadless(value) {
    if (value === 'false') {
        return "";
    } else {
        return "--headless";
    }
}


const headlessMode = setHeadless(process.env.HEADLESS);
console.log(`system variable headless = ${process.env.HEADLESS}`)
console.log(`headlessMode = ${headlessMode}`)

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
    bail: 0,
    chromeOptions: {
        args: [
            "--no-sandbox",
            "--disable-gpu",
            "--disable-dev-shm-usage",
            `${headlessMode}`,
            "user-agent=..."]
    }
}
