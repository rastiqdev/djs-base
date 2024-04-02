import { Client, Collection } from "discord.js";
import { SlashCommand } from "./SlashCommand";

export class DJSClient extends Client {
  commands = new Collection<string, SlashCommand>();
}
