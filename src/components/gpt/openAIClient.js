

require('dotenv').config();
const {configuration, OpenAIApi} = require('openai')

const configuartion = new configuration({
    apiKey: process.env.OPENAI_API_KEY

});

const openai = new OpenAIApi(configuration)

module.exports = openai
