// Author: massard-t
const winston = require('winston');

const MENTIONNED = 'desktop_notification';

const onMessage = (data) => {
  winston.info('Got some fresh new data');
  switch (data.type) {
    case MENTIONNED:
      // In this case, the bot is actually mentionned.
      break;
    case 'message':
      // Process message if keyword matches ?
      break;
    default: break;
  }
};

const onStart = () => {
  winston.info('Bot is up and running');
  // bot.postMessageToUser('theo', 'Hi Daddy!');
};


module.exports = {
  onMessage,
  onStart,
};
