// Author: massard-t
const winston = require('winston');
const process = require('process');
const Bot = require('slackbots');


const token = process.env.API_KEY;
const name = 'the_chill_one';
const MENTIONNED = 'desktop_notification';

const settings = {
  token,
  name,
};


const main = () => {
  const bot = new Bot(settings);

  bot.on('start', () => {
    winston.info(`${name} is up and running`);
    // bot.postMessageToUser('theo', 'Hi Daddy!');
  });

  bot.on('message', (data) => {
    switch (data.type) {
      case MENTIONNED:
        // In this case, the bot is actually mentionned.
        break;
      case 'message':
        // Process message if keyword matches ?
        break;
      default: break;
    }

    winston.info('Got some fresh new data c:');
    // console.log(data);
  });
};


main();
