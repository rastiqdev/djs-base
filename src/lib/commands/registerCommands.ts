import { REST, Routes, SlashCommandBuilder } from "discord.js";
import { DJSClientOptions } from "../types/ClientOptions";

export async function registerCommands(options: DJSClientOptions) {
  if (options.commands === undefined) return;
  const registeredCommands: SlashCommandBuilder[] = [];
  options.commands.forEach((command) => {
    registeredCommands.push(command.data);
  });

  const rest = new REST().setToken(options.token);

  try {
    await rest.put(
      Routes.applicationGuildCommands(options.clientId, options.guildId),
      {
        body: registeredCommands,
      },
    );
  } catch (error) {
    console.error(error);
  }
}
