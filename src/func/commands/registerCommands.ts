import { REST, Routes, SlashCommandBuilder } from "discord.js";

export type SlashCommand = {
  data: SlashCommandBuilder;
  execute: void;
};

export async function registerCommands(
  clientId: string,
  guildId: string,
  token: string,
  commands: SlashCommand[],
) {
  const registeredCommands: SlashCommandBuilder[] = [];
  commands.forEach((command) => {
    registeredCommands.push(command.data);
  });

  const rest = new REST().setToken(token);

  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: registeredCommands,
    });
  } catch (error) {
    console.error(error);
  }
}
