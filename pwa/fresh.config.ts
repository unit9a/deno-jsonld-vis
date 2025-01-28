import { defineConfig } from "$fresh/server.ts";



export default defineConfig({
  cert: Deno.readTextFileSync("./localhost.crt"),
  key: Deno.readTextFileSync("./localhost.key")
});
