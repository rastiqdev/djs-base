const { DJSClient } = require('../dist');
const { GatewayIntentBits } = require('discord.js');
const pingCommand = require('./commands/ping');
const readyEvent = require('./events/ready');
const assert = require('assert');

describe('Client', async function() {
    it('should connect and return our user id', async function() {
        const client = new DJSClient({ intents: [GatewayIntentBits.Guilds], clientId: process.env.TEST_CLIENTID, guildId: process.env.TEST_GUILDID, token: process.env.TEST_TOKEN, commands: [pingCommand], events: [readyEvent] })
    })
})