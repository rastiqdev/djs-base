import { DJSClient } from "../DJSClient";
import { Event } from "../types/Event";

export function handleEvents(client: DJSClient, events: Event[]) {
  events.forEach((event) => {
    if (event.once)
      client.once(event.name, (...args) => event.execute(...args));
    else client.on(event.name, (...args) => event.execute(...args));
  });
}
