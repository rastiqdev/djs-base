import { Client, GatewayIntentBits } from "discord.js";
import { SlashCommand, registerCommands } from "./commands/registerCommands";

export async function createClient(
  clientId: string,
  guildId: string,
  token: string,
  commands: SlashCommand[],
) {
  await registerCommands(clientId, guildId, token, commands);

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  client.login(token);

  return client;
}
