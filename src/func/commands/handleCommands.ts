import { Events } from "discord.js";
import { DJSClient } from "../types/DJSClient";
import { SlashCommand } from "../types/SlashCommand";

export function handleCommands(client: DJSClient, commands: SlashCommand[]) {
  commands.forEach((command) => {
    client.commands.set(command.data.name, command);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);

    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`,
      );
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
    }
  });
}
