# djs-base

## How to use it

1. Import the module from npm:
`npm i rastiqdev-djs-base`
2. Insert this in your index file:
```js
const { DJSClient } = require("rastiqdev-djs-base");
const myCommand = require("./commands/myCommand");
const myOtherCommand = require("./commands/myOtherCommand");
const myEvent = require("./events/myEvent");
const myOtherEvent = require("./events/myOtherEvent");

const client = new DJSClient(
  clientId: your_clientId,
  guildId: your_guildId,
  token: your_token,
  commands: [myCommand, myOtherCommand],
  events: [myEvent],
  intents: your_djs_intents
);
```
A command file should look like this: https://github.com/discordjs/guide/blob/main/code-samples/creating-your-bot/event-handling/commands/utility/ping.js
An event file should look like this: https://github.com/discordjs/guide/blob/main/code-samples/creating-your-bot/event-handling/events/ready.js
(those examples are in CommonJS, make sure to convert them to ESM if you're on TypeScript)