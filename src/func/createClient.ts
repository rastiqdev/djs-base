import { Client, GatewayIntentBits } from 'discord.js';

export function createClient(token: string) {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] })
    client.login(token);

    return client;
}