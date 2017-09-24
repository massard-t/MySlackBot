const winston = require('winston');
const process = require('process');
const Bot = require('slackbots');


const token = process.env.API_KEY;
const name = 'the_chill_one';

const settings = {
  token,
  name,
};


const bot = new Bot(settings);

bot.on('start', () => {
  winston.info(`${name} is up and running`);
  // bot.postMessageToUser('theo', 'Hi Daddy!');
});

bot.on('message', (data) => {
  winston.info('Got some fresh new data c:');
  console.log(data);
});
