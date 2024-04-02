import { GatewayIntentBits } from "discord.js";
import { registerCommands } from "./commands/registerCommands";
import { SlashCommand } from "./types/SlashCommand";
import { DJSClient } from "./types/DJSClient";
import { handleCommands } from "./commands/handleCommands";

export async function createClient(
  clientId: string,
  guildId: string,
  token: string,
  commands: SlashCommand[] | [],
) {
  if (commands.length !== 0)
    await registerCommands(clientId, guildId, token, commands);

  const client = new DJSClient({ intents: [GatewayIntentBits.Guilds] });
  if (commands.length !== 0) await handleCommands(client, commands);
  client.login(token);

  return client;
}
