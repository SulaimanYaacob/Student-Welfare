import type { EventPost } from "@prisma/client";
import type { RouterInputs, RouterOutputs } from "../utils/trpc";

export type EventsInputType = RouterInputs["eventPost"]["getAll"];
export type EventOutputType = RouterOutputs["eventPost"]["getAll"];

export interface EventData extends EventPost {
  author: {
    name: string;
  };
}
