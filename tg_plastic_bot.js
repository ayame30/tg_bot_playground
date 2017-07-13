// a plastic bot only target one person
const TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot(process.env.TG_TOKEN || '', { polling: true }),
    personName = process.env.PNAME || '';
let count = 0;

telegram.onText(/\/z/, function onText(msg) { // when type /z
    let plastic = parseInt(msg.text.replace('\/z ', '')) || 1;
    if (plastic > 10 || plastic <= 0) { // range: 1 - 10
        plastic = 10;
    }
    count += plastic;
    telegram.sendMessage(msg.chat.id,
        `已向${personName}派左${plastic}粒膠，總共${count}粒 😇'`,
        { reply_to_message_id: msg.message_id });
    });
