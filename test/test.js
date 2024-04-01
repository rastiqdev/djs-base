const { createClient } = require('../dist')
const pingCommand = require('./commands/ping');
const assert = require('assert');

describe('Client', async function() {
    it('should connect and return our user id', async function() {
        const client = await createClient(process.env.TEST_CLIENTID, process.env.TEST_GUILDID, process.env.TEST_TOKEN, [pingCommand]);
        client.once("ready", () => {
            assert.equal(client.user.id, process.env.TEST_CLIENTID);
        })
    })
})