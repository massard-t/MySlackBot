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
  console.log(`${name} is up and running`);
  bot.postMessageToUser('theo', 'Hi Daddy!');
});
