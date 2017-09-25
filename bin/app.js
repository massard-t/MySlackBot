// Author: massard-t
const winston = require('winston');
const process = require('process');
const Bot = require('slackbots');
const commands = require('../lib/commands');


const token = process.env.API_KEY;
const name = 'the_chill_one';

const settings = {
  token,
  name,
};


const main = () => {
  winston.info(`Starting ${name}...`);
  const bot = new Bot(settings);

  bot.on('start', commands.onStart);
  bot.on('message', commands.onMessage);
};


main();
