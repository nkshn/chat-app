const TelegramBot = require('node-telegram-bot-api');

const chatId = 761818167;
const TOKEN = "1373283516:AAGFD219HTii1eucDaEIOJuJBY-ZQrO72tk";

const bot = new TelegramBot(TOKEN, { polling: true });

module.exports = { bot, chatId }