import { Client, GatewayIntentBits } from "discord.js";
import { registerCommands } from "./commands/registerCommands";
import { DJSClientOptions } from "./types/ClientOptions";
import { handleCommands } from "./commands/handleCommands";
import { handleEvents } from "./events/handleEvents";

export class DJSClient extends Client {
  constructor(options: DJSClientOptions) {
    super(options);
    this.init(options);
  }

  private async init(options: DJSClientOptions) {
    if (options.commands !== undefined) await registerCommands(options);

    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    if (options.events !== undefined) await handleEvents(this, options.events);
    if (options.commands !== undefined)
      await handleCommands(this, options.commands);
    client.login(options.token);
  }
}
