import { Client, Collection, Events } from "discord.js";
import { SlashCommand } from "../types/SlashCommand";

export function handleCommands(client: Client, commands: SlashCommand[]) {
  const handledCommands = new Collection<string, SlashCommand>();
  commands.forEach((command) => {
    handledCommands.set(command.data.name, command);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = handledCommands.get(interaction.commandName);

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
