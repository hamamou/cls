import { Handlers } from "$fresh/server.ts";
import { CustomLoginSequence } from "../../utils/types.ts";

export const handler: Handlers<CustomLoginSequence | null> = {
  async POST(req, _ctx) {
    const jsonInText = await req.json();

    return new Response(JSON.stringify(jsonInText));
  },
};
