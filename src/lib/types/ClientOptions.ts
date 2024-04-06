import { ClientOptions } from "discord.js";
import { SlashCommand } from "./SlashCommand";
import { Event } from "./Event";

export type DJSClientOptions = ClientOptions & {
  clientId: string;
  guildId: string;
  token: string;
  commands?: SlashCommand[];
  events?: Event[];
};
