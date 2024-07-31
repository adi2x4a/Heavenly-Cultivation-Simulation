const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const botToken = '';

const bot = new TelegramBot(botToken, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the Ultimate Cultivation Universe Bot! Tap the button below to begin your journey.', {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Create Character", callback_data: "create_character" }]
      ]
    }
  });
});

// Inline query handler
bot.on("callback_query", (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;

  switch (data) {
    case "create_character":
      require('./commands/createCharacter')(bot, msg);
      break;
    case "menu":
      require('./commands/menu')(bot, msg);
      break;
    case "view_character":
      require('./commands/viewCharacter')(bot, msg);
      break;
    case "battle":
      require('./commands/battle')(bot, msg);
      break;
    case "quests":
      require('./commands/quest')(bot, msg);
      break;
    case "inventory":
      require('./commands/inventory')(bot, msg);
      break;
    case "guild":
      require('./commands/guild')(bot, msg);
      break;
    case "marketplace":
      require('./commands/marketplace')(bot, msg);
      break;
    case "world_events":
      require('./commands/worldEvents')(bot, msg);
      break;
    // Add more cases for other commands
  }
});

module.exports = bot;
