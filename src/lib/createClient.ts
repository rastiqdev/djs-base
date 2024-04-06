import { Client, GatewayIntentBits } from "discord.js";
import { registerCommands } from "./commands/registerCommands";
import { SlashCommand } from "./types/SlashCommand";
import { Event } from "./types/Event";
import { handleCommands } from "./commands/handleCommands";
import { handleEvents } from "./events/handleEvents";

export async function createClient(
  clientId: string,
  guildId: string,
  token: string,
  commands: SlashCommand[] | [],
  events: Event[] | [],
) {
  if (commands.length !== 0)
    await registerCommands(clientId, guildId, token, commands);

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  if (events.length !== 0) await handleEvents(client, events);
  if (commands.length !== 0) await handleCommands(client, commands);
  client.login(token);

  return client;
}
